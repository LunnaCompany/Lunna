import React from "react";
import "./CardTurma.css";

const CardTurma = ({nomeTurma, tema, setStep}) => {
    return (
        <div className="card-turma" onClick={() => setStep(3)}>
            <div className={`head-card-turma ${tema}`}></div>
            <div className="content-card-turma">
                <h2>{nomeTurma}</h2>
            </div>
        </div>
    );
};

export default CardTurma;
