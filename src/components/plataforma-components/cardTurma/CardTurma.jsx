import React from "react";
import "./CardTurma.css";

const CardTurma = ({nomeTurma}) => {
    return (
        <div className="card-turma">
            <div className="head-card-turma"></div>
            <div className="content-card-turma">
                <h2>{nomeTurma}</h2>
            </div>
        </div>
    );
};

export default CardTurma;
