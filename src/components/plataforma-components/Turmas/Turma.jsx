import React from "react";
import "./Turma.css";
import CardTurma from "../cardTurma/CardTurma";
import add from "../../../assets/add-new-card-turma.png";
import { motion } from "framer-motion";

const Turma = ({ setOpen, setOpenNameTurma }) => {
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
                    <CardTurma nomeTurma="Turma Girassol" />
                    <CardTurma nomeTurma="Turma Pipoca" />
                    <CardTurma nomeTurma="Turma Goiabada" />
                    <CardTurma nomeTurma="Turma Atum" />
                </div>

                <div className="box-btn-add-turma-card">
                    <div
                        onClick={() => {
                            setOpen(false);
                            setOpenNameTurma(true);
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
