import React, { useState } from "react";
import uploadImg from "../../../assets/upload-images.png";
import { motion } from "framer-motion";
import ModalAddRG from "../modalAddRG/ModalAddRG";
import camera from "../../../assets/Camera.png";

const NewCriancaForm = ({ addNewForm, register, errors, cpfDiscente }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="info-geral-crianca">
            <div className="cadastro-crianca-box-1">
                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>Nome completo do(a) filho(a)</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("nomeFilho", { required: true })}
                    />
                    {errors?.nomeFilho?.type === "required" && (
                        <p className="error-message-input">
                            O nome é obrigatorio
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container-altura-peso-data"
                >
                    <div className="container-data-input">
                        <label>Data de nascimento</label>
                        <div>
                            <div className="data-input">
                                <input
                                    type="text"
                                    maxLength={2}
                                    {...register("dia", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                        },
                                        minLength: {
                                            value: 2,
                                        },
                                    })}
                                />
                                <label htmlFor="">Dia</label>
                            </div>

                            <div className="data-input">
                                <input
                                    type="text"
                                    maxLength={2}
                                    {...register("mes", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                        },
                                        minLength: {
                                            value: 2,
                                        },
                                    })}
                                />
                                <label htmlFor="">Mês</label>
                            </div>
                            <div className="data-input">
                                <input
                                    type="text"
                                    maxLength={4}
                                    {...register("ano", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                        },
                                        minLength: {
                                            value: 4,
                                        },
                                    })}
                                />
                                <label htmlFor="">Ano</label>
                            </div>
                        </div>
                        {(errors?.dia?.type === "required" ||
                            errors?.mes?.type === "required" ||
                            errors?.ano?.type === "required") && (
                            <p className="error-message-input">
                                A data é obrigatoria
                            </p>
                        )}
                        {(errors?.dia?.type === "pattern" ||
                            errors?.mes?.type === "pattern" ||
                            errors?.ano?.type === "pattern") && (
                            <p className="error-message-input">
                                A data está invalida
                            </p>
                        )}
                        {(errors?.dia?.type === "minLength" ||
                            errors?.mes?.type === "minLength" ||
                            errors?.ano?.type === "minLength") && (
                            <p className="error-message-input">
                                A data está invalida
                            </p>
                        )}
                    </div>

                    <div className="container-altura-peso-input">
                        <div>
                            <label htmlFor="altura">Altura</label>
                            <input
                                type="text"
                                name="altura"
                                id="altura"
                                {...register("altura", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9.,]+$/,
                                    },
                                })}
                            />
                            {errors?.altura?.type === "required" && (
                                <p className="error-message-input ml">
                                    A altura é obrigatoria
                                </p>
                            )}
                            {errors?.altura?.type === "pattern" && (
                                <p className="error-message-input ml">
                                    Altura invalida
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="peso">Peso</label>
                            <input
                                type="text"
                                name="peso"
                                id="peso"
                                {...register("peso", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9.,]+$/,
                                    },
                                })}
                            />
                            {errors?.peso?.type === "required" && (
                                <p className="error-message-input ml">
                                    O peso é obrigatorio
                                </p>
                            )}
                            {errors?.peso?.type === "pattern" && (
                                <p className="error-message-input ml">
                                    Peso é invalido
                                </p>
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container-add-responsavel"
                >
                    <div>
                        <div
                            onClick={addNewForm}
                            className="btn-add-responsavel"
                        >
                            +
                        </div>
                        <span>Adicionar uma nova criança</span>
                    </div>
                </motion.div>
            </div>

            <div className="cadastro-crianca-box-2">
                
            <div className="container-foto-perfil">
                    <motion.div
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="box-add-foto"
                    >
                        <label htmlFor="">Subir foto de perfil:</label>

                        <div className="upload-btn btn-perfil-disc">
                            <label htmlFor="file">Adicionar documentos</label>
                            <input
                                type="file"
                                name="perfil"
                                id="file"
                                accept="image/png, image/jpeg"
                                {...register("imgPerfilDisc", { required: true })}
                            />
                            <img src={uploadImg} alt="" />
                        </div>
                        {errors?.imgPerfilDisc?.type === "required" && (
                            <p className="error-message-input">
                                A imagem é obrigatoria
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="ft-perfil-camera-container"
                    >
                        <img src={camera} alt="" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>CPF</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        maxLength={14}
                        className="input-cadastro"
                        {...register("cpfCrianca", { required: true })}
                    />
                    {errors?.cpfCrianca?.type === "required" && (
                        <p className="error-message-input ml">
                            O CPF é obrigatorio
                        </p>
                    )}
                    {cpfDiscente !== null && (
                        <p className="error-message-input ml">
                            O CPF ja existe
                        </p>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>RG</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("rgCrianca", { required: true })}
                    />
                    {errors?.rgCrianca?.type === "required" && (
                        <p className="error-message-input ml">
                            O RG é obrigatorio
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="cointainer-add-document"
                    onClick={() => setOpenModal(true)}
                >
                    <div className="container-error-upload-document">
                        <span>Adicionar foto ou documento em PDF:</span>
                    </div>

                    <div className="btn-add-document">
                        <span>Adicionar documentos</span>
                        <img src={uploadImg} alt="" srcset="" />
                        <input className="ipt-upload" type="file" />
                    </div>
                </motion.div>
            </div>
            {openModal && <ModalAddRG setOpenModal={setOpenModal} />}
        </div>
    );
};

export default NewCriancaForm;
