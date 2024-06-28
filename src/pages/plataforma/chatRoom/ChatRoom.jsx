import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import pedagoga from "../../../assets/pedagoga.png";
import mae from "../../../assets/foto-responsavel-mae.png";
import btnEnviar from "../../../assets/btn-enviar.png";
import "./ChatRoom.css";
import axios from "axios";
import { set } from "react-hook-form";

var stompClient = null;
export const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());
    const [publicChats, setPublicChats] = useState([]);
    const [tab, setTab] = useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: "",
        receivername: "",
        connected: false,
        message: "",
        date: "",
        image: null,
    });
    const [dataResponsavel, setDataResponsavel] = useState("");
    const [imgUser, setImgUser] = useState("");

    useEffect(() => {
        const email = sessionStorage.getItem("email");
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/responsavel/email/${email}`
                );
                //console.log(response.data);
                setDataResponsavel(response.data.nomeResp);

                setUserData((prevUserData) => ({
                    ...prevUserData,
                    image: response.data.ftPerfilResp,
                    username: response.data.nomeResp,
                }));

                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (userData.username !== "" || userData.image !== null) {
            connect();
        }
    }, [userData.username, userData.image]);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/images?filename=${encodeURIComponent(
                        userData.image
                    )}`,
                    { responseType: "arraybuffer" }
                );

                const imgUrl = getImage(response.data);
                setImgUser(imgUrl);

                console.log(imgUrl);
            } catch (error) {
                console.log(error);
            }
        };

        if (userData.image !== null) {
            console.log("teste");
            //console.log(getImage(fetchImage(encodeURIComponent(userData.image))));
            fetchImage();
            //console.log(userData.image);
        }
    }, [userData.image]);

    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

    const fetchImage = async (image) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/images?filename=${image}`,
                { responseType: "arraybuffer" }
            );

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const connect = () => {
        let Sock = new SockJS("http://localhost:8080/ws");
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        setUserData({ ...userData, connected: true });
        stompClient.subscribe("/chatroom/public", onMessageReceived);
        stompClient.subscribe(
            "/user/" + userData.username + "/private",
            onPrivateMessage
        );

        console.log(userData);
        userJoin();
    };

    const userJoin = () => {
        var chatMessage = {
            senderName: userData.username,
            status: "JOIN",
            image: userData.image,
        };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    };

    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        switch (payloadData.status) {
            case "JOIN":
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    };

    const onPrivateMessage = (payload) => {
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    };

    const onError = (err) => {
        console.log(err);
    };

    const handleMessage = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, message: value });
    };

    const sendValue = () => {
        if (stompClient) {
            let time = new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
            });
            let chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status: "MESSAGE",
                date: time,
                image: userData.image,
            };
            console.log(chatMessage);
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, message: "" });
        }
    };

    const sendPrivateValue = () => {
        if (stompClient) {
            let time = new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
            });
            let chatMessage = {
                senderName: userData.username,
                receiverName: tab,
                message: userData.message,
                status: "MESSAGE",
                date: time,
            };

            if (userData.username !== tab) {
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send(
                "/app/private-message",
                {},
                JSON.stringify(chatMessage)
            );
            setUserData({ ...userData, message: "" });
        }
    };

    return (
        <div className="container-chat-page">
            <div className="chat-box">
                <div className="member-list">
                    <ul>
                        <li
                            onClick={() => {
                                setTab("CHATROOM");
                            }}
                            className={`member ${
                                tab === "CHATROOM" && "active"
                            }`}
                        >
                            Geral
                        </li>
                        {[...privateChats.keys()].map((name, index) => (
                            <li
                                onClick={() => {
                                    setTab(name);
                                }}
                                className={`member ${tab === name && "active"}`}
                                key={index}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
                {tab === "CHATROOM" && (
                    <div className="chat-content">
                        <ul className="chat-messages">
                            {publicChats.map((chat, index) => (
                                <li
                                    className={`message ${
                                        chat.senderName === userData.username &&
                                        "self"
                                    }`}
                                    key={index}
                                >
                                    {chat.senderName !== userData.username && (
                                        <div className="avatar-box">
                                            <div className="avatar">
                                                {chat.senderName}
                                            </div>
                                            <div className="date-time">
                                                {chat.date}
                                            </div>
                                        </div>
                                    )}
                                    <div
                                        className={
                                            chat.senderName ===
                                            userData.username
                                                ? "message-data"
                                                : "message-data-self"
                                        }
                                    >
                                        {chat.message}
                                    </div>

                                    {chat.senderName === userData.username && (
                                        <div className="avatar-box">
                                            <div className="avatar self">
                                                {chat.senderName}
                                            </div>
                                            <div className="date-time">
                                                {chat.date}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input
                                type="text"
                                className="input-message"
                                placeholder="Digite sua mensagem"
                                value={userData.message}
                                onChange={handleMessage}
                            />
                            <button
                                type="button"
                                className="send-button"
                                onClick={sendValue}
                            >
                                <img src={btnEnviar} alt="" />
                            </button>
                        </div>
                    </div>
                )}
                {tab !== "CHATROOM" && (
                    <div className="chat-content">
                        <ul className="chat-messages">
                            {[...privateChats.get(tab)].map((chat, index) => (
                                <li
                                    className={`message ${
                                        chat.senderName === userData.username &&
                                        "self"
                                    }`}
                                    key={index}
                                >
                                    {chat.senderName !== userData.username && (
                                        <div className="avatar-box">
                                            <div className="avatar">
                                                {chat.senderName}
                                            </div>
                                            <div className="date-time">
                                                {chat.date}
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        className={
                                            chat.senderName ===
                                            userData.username
                                                ? "message-data"
                                                : "message-data-self"
                                        }
                                    >
                                        {chat.message}
                                    </div>
                                    {chat.senderName === userData.username && (
                                        <div className="avatar-box">
                                            <div className="avatar self">
                                                {chat.senderName}
                                            </div>
                                            <div className="date-time">
                                                {chat.date}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="send-message">
                            <input
                                type="text"
                                className="input-message"
                                placeholder={`Digite sua mensagem para ${tab}`}
                                value={userData.message}
                                onChange={handleMessage}
                            />
                            <button
                                type="button"
                                className="send-button"
                                onClick={sendPrivateValue}
                            >
                                <img src={btnEnviar} alt="" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
