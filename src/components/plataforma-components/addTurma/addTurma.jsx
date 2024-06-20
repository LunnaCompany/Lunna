import React from "react";
import "./addTurma.css";
import { motion } from "framer-motion";

export const AddTurma = ({
    register,
    errors,
    handleSubmit,
    onSubmit,
    setTemaAviso,
}) => {
   
    return (
        <div className="dark-background-turma">
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container-select-name-turma"
            >
                <div className="head-select-name-turma">
                    <h2>Criando nova turma</h2>
                </div>

                <div className="content-add-name-tema-turma">
                    <div className="content-add-name-turma">
                        <label htmlFor="">Nome da turma:</label>
                        <div className="container-input-add-name-turma">
                            <input
                                {...register("nomeTurma", { required: true })}
                                type="text"
                                id="nameTurma"
                            />
                            {errors?.nomeTurma?.type === "required" && (
                                <p className="error-message-input">
                                    Campo obrigatorio
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="content-add-tema-turma">
                        <span>Cor tema:</span>
                        <div className="colors-tema-container">
                            <div className="tema-turma-1" onClick={() => setTemaAviso("rosa-aviso")}></div>
                            <div className="tema-turma-2" onClick={() => setTemaAviso("laranja-aviso")}></div>
                            <div className="tema-turma-3" onClick={() => setTemaAviso("azul-aviso")}></div>
                            <div className="tema-turma-4" onClick={() => setTemaAviso("roxo-aviso")}></div>
                        </div>
                    </div>

                    <div className="content-add-turno-turma">
                        <span>Turno:</span>
                        <div>
                            <select
                                {...register("periodo", {
                                    validate: (value) => {
                                        return value !== "0";
                                    },
                                })}
                            >
                                <option value="0">Turno</option>
                                <option value="Manhã">Manhã</option>
                                <option value="Tarde">Tarde</option>
                            </select>

                            {errors?.periodo?.type === "validate" && (
                                <p className="error-message-input">
                                    Campo obrigatorio
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="container-btn-select-name-turma">
                        <div
                            className="btn-select-name-turma"
                            onClick={() => {
                                handleSubmit(onSubmit)();
                            }}
                        >
                            Confirmar
                        </div>
                    </div>
                </div>

                <div className="footer-select-name-turma"></div>
            </motion.div>
        </div>
    );
};
