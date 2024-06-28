import React, { useState } from "react";
import "./Lumi.css";
import perilTeste from "../../../assets/foto-chat-teste.png";
import lumi from "../../../assets/lumi.png";
import axios from "axios";

import QuestionLumiSkeleton from "../../../components/plataforma-components/questionLumiSkeleton/questionLumiSkeleton";

const Lumi = () => {
    const [questionValue, setQuestionValue] = useState("");
    const [questionResponse, setQuestionResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    const postQuestion = async (question) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:9090/lunna-ia/chat",
                null,
                {
                    params: {
                        question:
                            `Formate o texto da resposta com as seguintes tags HTML:

                            * Use a tag "<p>" para o texto principal, com estilo "font-size: 16px".
                            * Use a tag "<h1>" para títulos principais, com estilo "font-size: 18px".
                            * Use a tag "<h2>" para títulos secundários, com estilo "font-size: 16px".
                            * Use a tag "<br/> para quebrar linha caso necessario` +
                            question,
                    },
                }
            );

            console.log(response.data.html);

            setQuestionResponse((prevQuestion) => [
                ...prevQuestion,
                response.data.html,
            ]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleQuestionChange = (event) => {
        setQuestionValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log("Enter pressionado:", questionValue);
            setQuestionResponse((prevQuestion) => [
                ...prevQuestion,
                questionValue,
            ]);
            postQuestion(questionValue);
            setQuestionValue("");
            setLoading(true);
        }
    };

    return (
        <div className="page-lumi">
            <div className="container-lumi-messages">
                {questionResponse.map((question, index) => (
                    <div key={index}>
                        {index % 2 !== 0 ? (
                            <div className="box-lumi-message-left">
                                <div className="content-message-lumi">
                                    <div className="message-lumi-left">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: question,
                                            }}
                                        />
                                    </div>
                                    <img src={lumi} alt="" />
                                </div>
                            </div>
                        ) : (
                            <div className="box-lumi-message-right">
                                <div className="content-message-lumi">
                                    <img src={perilTeste} alt="" />
                                    <div className="message-lumi-right">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: question,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="content-skeleton-lumi">
                        <QuestionLumiSkeleton />
                    </div>
                )}
            </div>

            <div className="box-input-lumi">
                <input
                    type="text"
                    value={questionValue}
                    onChange={handleQuestionChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default Lumi;
