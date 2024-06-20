import React, { useState } from "react";
import "./AddAviso.css";
import { motion } from "framer-motion";

const AddAviso = ({ register, errors, onSubmit, handleSubmit }) => {
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
                        <div>
                            <input
                                {...register("tituloTurma", { required: true })}
                                type="text"
                            />
                            {errors?.tituloTurma?.type === "required" && (
                                <p className="error-message-input">
                                    Campo obrigatorio
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="box-input-add-content-aviso">
                        <label>Aviso:</label>
                        <div className="conteudo-aviso-container">
                            <input

                                {...register("conteudoAviso", {
                                    required: true,
                                })}
                                type="text"
                            />
                            {errors?.conteudoAviso?.type === "required" && (
                                <p className="error-message-input">
                                    Campo obrigatorio
                                </p>
                            )}
                        </div>
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
                                    value="Normal"
                                    {...register("importancia", {
                                        required: true,
                                    })}
                                    checked={selectedOption === "Normal"}
                                    onChange={handleOptionChange}
                                />
                            </div>
                            <div className="nivel-atencao">
                                <label htmlFor="atencao">Atenção</label>
                                <input
                                    type="radio"
                                    name=""
                                    id="atencao"
                                    value="Atenção"
                                    {...register("importancia", {
                                        required: true,
                                    })}
                                    checked={selectedOption === "Atenção"}
                                    onChange={handleOptionChange}
                                />
                            </div>
                            <div className="nivel-importante">
                                <label htmlFor="Importante">Importante</label>
                                <input
                                    type="radio"
                                    name=""
                                    id="Importante"
                                    value="Importante"
                                    {...register("importancia", {
                                        required: true,
                                    })}
                                    checked={selectedOption === "Importante"}
                                    onChange={handleOptionChange}
                                />
                            </div>
                        </div>
                        {errors?.importancia?.type === "required" && (
                            <p className="error-message-input">
                                Campo obrigatorio
                            </p>
                        )}
                    </div>

                    <div className="container-btn-enviar-aviso">
                        <div
                            onClick={() => {
                                handleSubmit(onSubmit)();
                            }}
                        >
                            Enviar
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AddAviso;
