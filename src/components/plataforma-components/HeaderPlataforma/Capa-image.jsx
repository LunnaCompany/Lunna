import React, { useEffect } from "react";
import "./Capa-image.css";
import fotomain from "./images/capa.png";
import fotoresponsavel from "./images/fotoresponsavel.png";

import { motion } from "framer-motion";
import { IoCamera } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { useState } from "react";
import AlterarPerfil from "./AlterarPerfil/AlterarPerfil";
import { LuBell } from "react-icons/lu";
import { MdOutlinePhotoCamera } from "react-icons/md";
//
import CardSideNotification from "../SideNotification/CardSideNotification/CardSideNotification";
import SideNotification from "../SideNotification/SideNotification/";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//
function Capa() {
    //
    const [overlay, setOverlay] = useState(false);
    const [notificationOverlay, setNotificationOverlay] = useState(false);
    const [imagePerfil, setImagePerfil] = useState("");
    const navigate = useNavigate();
    const email = localStorage.getItem("email");

    useEffect(() => {
        const fetchDataResp = async () => {
            const response = await axios.get(
                `http://localhost:8080/responsavel/email/${email}`
            );
            console.log(response.data);
            fetchImgResp(encodeURIComponent(response.data.ftPerfilResp));
        };

        const fetchImgResp = async (image) => {
            const response = await axios.get(
                `http://localhost:8080/images?filename=${image}`,
                { responseType: "arraybuffer" }
            );
            setImagePerfil(response.data);
        };

        fetchDataResp();
    }, []);

    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

    const scrollToPage = (page, elementId) => {
        navigate(page);

        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 800,
                smooth: true,
                offset: -50,
            });
        }, 10);
    };

    return (
        <div className="container-banner">
            <div className="capa">
                <img src={fotomain} alt="" />

                <div className="sino-container">
                    <motion.button
                        className="sino"
                        whileHover={{ scale: 1.12 }}
                    >
                        <LuBell
                            size={25}
                            onClick={() => setNotificationOverlay(true)}
                        />
                    </motion.button>
                </div>

                <div className="edit-container">
                    <motion.button className="edit" whileHover={{ scale: 1.1 }}>
                        <LuPencil size={25} onClick={() => setOverlay(true)} />
                    </motion.button>
                </div>

                <div className="foto-mae">
                    <img src={getImage(imagePerfil)} alt="" />
                    <div className="picture-cotainer">
                        <button className="picture">
                            {" "}
                            <MdOutlinePhotoCamera
                                color="white"
                                size="20"
                            />{" "}
                        </button>
                    </div>
                </div>
            </div>

            <div className="barra-container">
                <div className="barra">
                    <h2
                        onClick={() =>
                            scrollToPage("/Lunna-landing-page/perfil", "perfil")
                        }
                    >
                        Perfil do Gabriel
                    </h2>
                    <h2
                        onClick={() =>
                            scrollToPage(
                                "/Lunna-landing-page/memoria",
                                "memoria"
                            )
                        }
                    >
                        Memorias
                    </h2>
                    <h2
                        onClick={() =>
                            scrollToPage(
                                "/Lunna-landing-page/atividade",
                                "perfil"
                            )
                        }
                    >
                        Atividades do Gabriel
                    </h2>
                    <h2>Enquetes Passadas</h2>
                </div>
            </div>
            {overlay && (
                <AlterarPerfil setOverlay={setOverlay} overlay={overlay} />
            )}
            {notificationOverlay && (
                <SideNotification
                    setNotificationOverlay={setNotificationOverlay}
                />
            )}
        </div>
    );
}
export default Capa;
