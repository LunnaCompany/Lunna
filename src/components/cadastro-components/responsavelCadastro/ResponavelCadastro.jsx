import React, { useState } from "react";
import "./ResponsavelCadastro.css";
import camera from "../../../assets/Camera.png";
import uploadImg from "../../../assets/upload-images.png";
import ModalAddRG from "../modalAddRG/ModalAddRG";
import { motion } from "framer-motion";

const ResponavelCadastro = ({
    imgRgResp,
    register,
    errors,
    watch,
    handleInputFile,
    setimgRgResp,
    cpfResponsavel,
    emailResponsavel,
}) => {
    const watchPassword = watch("senha");
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="cadastro-responsavel">
            <div className="cadastro-responsavel-esquerda">
                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>Nome completo do responsavel</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        required
                        className="input-cadastro"
                        {...register("nome", { required: true })}
                    />
                    {errors?.nome?.type === "required" && (
                        <p className="error-message-input">
                            O nome é obrigatorio
                        </p>
                    )}
                </motion.div>

                <div className="input-cep-uf">
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="input-cep-container"
                    >
                        <label htmlFor="">CEP</label>
                        <div className="box-cep">
                            <input
                                className="input-cep"
                                maxLength={5}
                                type="text"
                                {...register("cep", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9]+$/,
                                    },
                                    minLength: {
                                        value: 5,
                                    },
                                })}
                            />
                            <div></div>
                            <input
                                type="text"
                                maxLength={3}
                                className="input-cep-digito"
                                {...register("cepDigito", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9]+$/,
                                    },
                                    minLength: {
                                        value: 3,
                                    },
                                })}
                            />
                        </div>
                        {(errors?.cep?.type === "required" ||
                            errors?.cepDigito?.type === "required") && (
                            <p className="error-message-input">
                                O CEP é obrigatorio
                            </p>
                        )}
                        {(errors.cep?.type === "pattern" ||
                            errors.cepDigito?.type === "pattern") && (
                            <p className="error-message-input">
                                Apenas números são permitidos
                            </p>
                        )}
                        {(errors.cep?.type === "minLength" ||
                            errors.cepDigito?.type === "minLength") && (
                            <p className="error-message-input">
                                Quantidade de caracteres invalida
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="input-uf-container"
                    >
                        <label htmlFor="">UF</label>
                        <input
                            className="input-uf"
                            type="text"
                            maxLength={2}
                            {...register("uf", {
                                required: true,
                                minLength: {
                                    value: 2,
                                },
                                pattern: {
                                    value: /^[^\d]+$/,
                                },
                            })}
                        />
                        {errors?.uf?.type === "required" && (
                            <p className="error-message-input-uf">
                                A UF é obrigatoria
                            </p>
                        )}
                        {(errors?.uf?.type === "minLength" ||
                            errors?.uf?.type === "pattern") && (
                            <p className="error-message-input-uf">
                                UF invalida
                            </p>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>Rua</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("rua", { required: true })}
                    />
                    {errors?.rua?.type === "required" && (
                        <p className="error-message-input">
                            A rua é obrigatoria
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>Bairro</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("bairro", { required: true })}
                    />
                    {errors?.bairro?.type === "required" && (
                        <p className="error-message-input">
                            O bairro é obrigatorio
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-numero-telefone"
                >
                    <span className="span-numero-tel">Número de telefone</span>
                    <div className="container-input-ddd-telefone">
                        <div className="input-ddd-container">
                            <input
                                type="text"
                                className="input-ddd"
                                maxLength={2}
                                {...register("dddTelefone", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9]+$/,
                                    },
                                    minLength: {
                                        value: 2,
                                    },
                                })}
                            />
                        </div>

                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-telefone"
                            maxLength={9}
                            {...register("telefone", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]+$/,
                                },
                                minLength: {
                                    value: 9,
                                },
                            })}
                        />
                    </div>
                    {(errors?.telefone?.type === "required" ||
                        errors?.dddTelefone?.type === "required") && (
                        <p className="error-message-input">
                            O telefone é obrigatorio
                        </p>
                    )}

                    {(errors?.telefone?.type === "pattern" ||
                        errors?.dddTelefone?.type === "pattern") && (
                        <p className="error-message-input">
                            Digite apenas números
                        </p>
                    )}

                    {(errors?.telefone?.type === "minLength" ||
                        errors?.dddTelefone?.type === "minLength") && (
                        <p className="error-message-input">
                            Quantidade de caracteres invalida
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-numero-telefone"
                >
                    <span className="span-numero-tel">Celular</span>
                    <div className="container-input-ddd-telefone">
                        <div className="input-ddd-container">
                            <input
                                type="text"
                                className="input-ddd"
                                maxLength={2}
                                {...register("dddCelular", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9]+$/,
                                    },
                                    minLength: {
                                        value: 2,
                                    },
                                })}
                            />
                        </div>

                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-telefone"
                            maxLength={9}
                            {...register("celular", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]+$/,
                                },
                                minLength: {
                                    value: 9,
                                },
                            })}
                        ></input>
                    </div>
                    {(errors?.celular?.type === "required" ||
                        errors?.dddCelular?.type === "required") && (
                        <p className="error-message-input">
                            O telefone é obrigatorio
                        </p>
                    )}

                    {(errors?.celular?.type === "pattern" ||
                        errors?.dddCelular?.type === "pattern") && (
                        <p className="error-message-input">
                            Digite apenas numeros
                        </p>
                    )}
                    {(errors?.celular?.type === "minLength" ||
                        errors?.dddCelular?.type === "minLength") && (
                        <p className="error-message-input">
                            Quantidade de caracteres invalida
                        </p>
                    )}
                </motion.div>
            </div>

            <div className="cadastro-responsavel-esquerda">
                <div className="container-foto-perfil">
                    <motion.div
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="box-add-foto"
                    >
                        <label htmlFor="">Subir foto de perfil:</label>

                        <div className="upload-btn">
                            <label htmlFor="file">Adicionar documentos</label>
                            <input
                                type="file"
                                name="perfil"
                                id="file"
                                accept="image/png, image/jpeg"
                                {...register("imgPerfil", { required: true })}
                            />
                            <img src={uploadImg} alt="" />
                        </div>
                        {errors?.imgPerfil?.type === "required" && (
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
                    <label>RG</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("rg", { required: true })}
                    />
                    {errors?.rg?.type === "required" && (
                        <p className="error-message-input">
                            O RG é obrigatorio
                        </p>
                    )}
                </motion.div>

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
                        {...register("cpf", { required: true })}
                    />
                    {errors?.cpf?.type === "required" && (
                        <p className="error-message-input">
                            O CPF é obrigatorio
                        </p>
                    )}
                    {cpfResponsavel !== null && cpfResponsavel !== "" && (
                        <p className="error-message-input">CPF já cadastrado</p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="add-document-container"
                    onClick={() => setOpenModal(!openModal)}
                >
                    <span className="span-add-document">
                        Adicionar foto ou documento em PDF do RG:
                    </span>
                    <div className="container-error-upload">
                        <div className="upload-btn-document">
                            <label>Adicionar documentos</label>
                            <img src={uploadImg} alt="" />
                        </div>

                        <input className="ipt-upload" type="file" />

                        {errors?.imgPerfil?.type === "required" && (
                            <p className="error-message-input">
                                A foto é obrigatoria
                            </p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>E-mail</label>
                    <input
                        type="email"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            },
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p className="error-message-input">
                            O email é obrigatorio
                        </p>
                    )}
                    {errors?.email?.type === "pattern" && (
                        <p className="error-message-input">Email invalido</p>
                    )}
                    {emailResponsavel !== null && (
                        <p className="error-message-input">
                            Email ja cadastrado
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>E-mail segundario para recuperação de conta</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("emailSecundario", {
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            },
                        })}
                    />
                    {errors?.emailSecundario?.type === "required" && (
                        <p className="error-message-input">
                            O email secundario é obrigatorio
                        </p>
                    )}
                    {errors?.emailSecundario?.type === "pattern" && (
                        <p className="error-message-input">Email invalido</p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>Senha</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("senha", { required: true, minLength: 8 })}
                    />
                    {errors?.senha?.type === "minLength" && (
                        <p className="error-message-input">
                            O minimo de caracteres é 8
                        </p>
                    )}
                    {errors?.senha?.type === "required" && (
                        <p className="error-message-input">
                            A senha é obrigatoria
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="input-container"
                >
                    <label>Confirmar Senha</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("confirmarSenha", {
                            required: true,
                            minLength: 8,
                            validate: (value) => value === watchPassword,
                        })}
                    />
                    {errors?.confirmarSenha?.type === "required" && (
                        <p className="error-message-input">
                            A senha é obrigatoria
                        </p>
                    )}
                    {errors?.confirmarSenha?.type === "validate" && (
                        <p className="error-message-input">
                            As senhas nao sao iguais
                        </p>
                    )}
                </motion.div>
            </div>
            {openModal && (
                <ModalAddRG
                    setOpenModal={setOpenModal}
                    setimgRgResp={setimgRgResp}
                    register={register}
                />
            )}
        </div>
    );
};

export default ResponavelCadastro;
