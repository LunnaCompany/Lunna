import React, { useEffect, useState } from "react";
import "./Turma.css";
import CardTurma from "../cardTurma/CardTurma";
import add from "../../../assets/add-new-card-turma.png";
import { motion } from "framer-motion";
import axios from "axios";

const Turma = ({ setOpen, handleNextStep, setStep }) => {
    const [dataTurma, setDataTurma] = useState([]);
    useEffect(() => {
        const fechData = async () => {
            const response = await axios.get("http://localhost:8080/turma");
            console.log(response.data);
            setDataTurma(response.data);
        };

        fechData();
    }, []);

    return (
        <div className="dark-background-turma">
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pop-up-add-turma"
            >
                <div className="title-card-add-turma">
                    <h2>Escolha a Turma</h2>
                </div>
                <div className="content-card-add-turma">
                    {dataTurma.map((data) => (
                        <CardTurma
                            setStep={setStep}
                            nomeTurma={data.nomeTurma}
                            tema={data.tema}
                        />
                    ))}
                </div>

                <div className="box-btn-add-turma-card">
                    <div
                        onClick={() => {
                            setOpen(false);
                            handleNextStep();
                        }}
                        className="btn-add-turma-card"
                    >
                        <span>Criar nova turma</span>
                        <div>
                            <img src={add} alt="" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Turma;
