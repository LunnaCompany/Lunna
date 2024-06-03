import React from "react";

const NewContatoForm = ({ addNewForm, register, errors }) => {
    return (
        <div className="contato-emergia-crianca">
            <div className="contato-nome-parentesco">
                <div className="input-container">
                    <label>Nome de completo</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("nomeContato", { required: true })}
                    />
                    {errors?.nomeContato?.type === "required" && (
                        <p className="error-message-input ml">
                            O nome é obrigatorio
                        </p>
                    )}
                </div>
                <div className="input-container">
                    <label>Qual o grau de parentesco?</label>
                    <input
                        type="text"
                        placeholder="Exe: Mãe, pai, tio etc"
                        name=""
                        id=""
                        className="input-parentesco"
                        {...register("parentesco", { required: true })}
                    />
                    {errors?.parentesco?.type === "required" && (
                        <p className="error-message-input ml">
                            O parentesco é obrigatorio
                        </p>
                    )}
                </div>
                <div className="container-add-responsavel">
                    <div>
                        <div
                            onClick={addNewForm}
                            className="btn-add-responsavel"
                        >
                            +
                        </div>
                        <span>Adicionar uma nova contato</span>
                    </div>
                </div>
            </div>

            <div className="contato-numero-parentesco">
                <div className="input-numero-telefone">
                    <span className="span-numero-tel">Numero de telefone</span>
                    <div className="container-input-ddd-telefone">
                        <div className="input-ddd-container">
                            <input
                                type="text"
                                className="input-ddd"
                                maxLength={2}
                                {...register("dddTelefoneContato", {
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
                            maxLength={9}
                            className="input-telefone"
                            {...register("telefoneContato", {
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
                    {(errors?.telefoneContato?.type === "required" ||
                        errors?.dddTelefoneContato?.type === "required") && (
                        <p className="error-message-input ml">
                            O telefone é obrigatorio
                        </p>
                    )}
                    {(errors?.telefoneContato?.type === "pattern" ||
                        errors?.dddTelefoneContato?.type === "pattern") && (
                        <p className="error-message-input ml">
                            Digite apenas números
                        </p>
                    )}
                    {(errors?.telefoneContato?.type === "minLength" ||
                        errors?.dddTelefoneContato?.type === "minLength") && (
                        <p className="error-message-input ml">
                            Quantidade de caracteres invalido
                        </p>
                    )}
                </div>
                <div className="input-numero-telefone">
                    <span className="span-numero-tel">Numero de celular</span>
                    <div className="container-input-ddd-telefone">
                        <div className="input-ddd-container">
                            <input
                                type="text"
                                className="input-ddd"
                                maxLength={2}
                                {...register("dddCelularContato", {
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
                            maxLength={9}
                            className="input-telefone"
                            {...register("celularContato", {
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
                    {(errors?.celularContato?.type === "required" ||
                        errors?.dddCelularContato?.type === "required") && (
                        <p className="error-message-input ml">
                            O celular é obrigatorio
                        </p>
                    )}
                    {(errors?.celularContato?.type === "pattern" ||
                        errors?.dddCelularContato?.type === "pattern") && (
                        <p className="error-message-input ml">
                            Digite apenas números
                        </p>
                    )}
                    {(errors?.celularContato?.type === "minLength" ||
                        errors?.dddCelularContato?.type === "minLength") && (
                        <p className="error-message-input ml">
                            Quantidade de caracteres invalido
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewContatoForm;
