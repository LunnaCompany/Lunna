import React, { useState } from "react";
import "./AddAviso.css";
import { motion } from "framer-motion";

const AddAviso = ({ setOpenAviso, onSubmit, handleSubmit }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="dark-background-turma">
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container-add-new-aviso"
            >
                <div className="head-add-new-aviso">Adicionar aviso</div>
                <div className="content-add-new-aviso">
                    <div className="box-input-add-title-aviso">
                        <label>Titulo:</label>
                        <input type="text" />
                    </div>

                    <div className="box-input-add-content-aviso">
                        <label>Aviso:</label>
                        <textarea name="" id=""></textarea>
                    </div>

                    <div className="box-add-importancia">
                        <span>Nivel de Importancia:</span>
                        <div className="container-nivel-importancia">
                            <div className="nivel-normal">
                                <label htmlFor="normal">Normal</label>
                                <input
                                    type="radio"
                                    name=""
                                    id="normal"
                                    value="option1"
                                    checked={selectedOption === "option1"}
                                    onChange={handleOptionChange}
                                />
                            </div>
                            <div className="nivel-atencao">
                                <label htmlFor="normal">Atenção</label>
                                <input
                                    type="radio"
                                    name=""
                                    id="normal"
                                    value="option2"
                                    checked={selectedOption === "option2"}
                                    onChange={handleOptionChange}
                                />
                            </div>
                            <div className="nivel-importante">
                                <label htmlFor="normal">Importante</label>
                                <input
                                    type="radio"
                                    name=""
                                    id="normal"
                                    value="option3"
                                    checked={selectedOption === "option3"}
                                    onChange={handleOptionChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-btn-enviar-aviso">
                        <div onClick={() => {setOpenAviso(false); handleSubmit(onSubmit)()}}>Enviar</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AddAviso;
