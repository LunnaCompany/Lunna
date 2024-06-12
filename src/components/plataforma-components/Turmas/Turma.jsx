import React from "react";
import "./Turma.css";
import CardTurma from "../cardTurma/CardTurma";
import add from "../../../assets/add-new-card-turma.png";

const Turma = ({ setOpen, setOpenNameTurma }) => {
    return (
        <div className="dark-background-turma">
            <div className="pop-up-add-turma">
                <div className="title-card-add-turma">
                    <h2>Escolha a Turma</h2>
                </div>
                <div className="content-card-add-turma">
                    <CardTurma />
                    <CardTurma />
                    <CardTurma />
                    <CardTurma />
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
            </div>
        </div>
    );
};

export default Turma;
