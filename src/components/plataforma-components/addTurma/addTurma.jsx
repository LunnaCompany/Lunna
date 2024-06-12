import React from "react";
import "./addTurma.css";

export const AddTurma = ({ setOpenAddAluno, setOpenNameTurma }) => {
    return (
        <div className="dark-background-turma">
            <div className="container-select-name-turma">
                <div className="head-select-name-turma">
                    <h2>Criando nova turma</h2>
                </div>

                <div className="content-add-name-tema-turma">
                    <div className="content-add-name-turma">
                        <label htmlFor="">Nome da turma:</label>
                        <input type="text" id="nameTurma" />
                    </div>

                    <div className="content-add-tema-turma">
                        <span>Cor tema:</span>
                        <div className="colors-tema-container">
                            <div className="tema-turma-1"></div>
                            <div className="tema-turma-2"></div>
                            <div className="tema-turma-3"></div>
                            <div className="tema-turma-4"></div>
                        </div>
                    </div>

                    <div className="content-add-turno-turma">
                        <span>Turno:</span>
                        <select>
                            <option value="valor1">Manhã</option>
                            <option value="valor1">Tarde</option>
                        </select>
                    </div>

                    <div className="container-btn-select-name-turma">
                        <div
                            className="btn-select-name-turma"
                            onClick={() => {
                                setOpenAddAluno(true);
                                setOpenNameTurma(false);
                            }}
                        >
                            Confirmar
                        </div>
                    </div>
                </div>

                <div className="footer-select-name-turma"></div>
            </div>
        </div>
    );
};
