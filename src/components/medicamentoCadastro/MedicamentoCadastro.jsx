import React, { useState } from "react";
import uploadImg from "../../assets/upload-images.png";
import "./MedicamentoCadastro.css";

const MedicamentoCadastro = ({ register, errors }) => {
    const [plan, setPlan] = useState(false);
    const [isPcd, setIsPcd] = useState(false);
    const [tratamento, setTratamento] = useState(false);
    const [medicamento, setMedicamento] = useState(false);
    const [comidas, setComidas] = useState(false);

    return (
        <div className="medicamento-cadastro-container">
            <div className="box-medicamento-1">
                <div className="input-container">
                    <label>Número da carteirinha do SUS</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("sus", { required: true })}
                    />
                    {errors?.sus?.type === "required" && (
                        <p className="error-message-input ml">
                            A carterinha é obrigatoria
                        </p>
                    )}
                </div>

                <div className="cointainer-add-document">
                    <span>Adicionar foto ou documento em PDF:</span>
                    <div className="btn-add-document">
                        <span>Adicionar documentos</span>{" "}
                        <img src={uploadImg} alt="" srcset="" />
                    </div>
                </div>

                <div className="container-plano-saude">
                    <span>Tem plano de saúde?</span>
                    <div className="container-input-plano">
                        <div>
                            <label htmlFor="temPlano">Sim</label>
                            <input
                                type="checkbox"
                                checked={plan == true}
                                name="temPlano"
                                id="temPlano"
                                onClick={() => setPlan(true)}
                                {...register("plano", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="naoTemPlano">Não</label>
                            <input
                                type="checkbox"
                                checked={plan == false}
                                name="naoTemPlano"
                                id="naoTemPlano"
                                onClick={() => setPlan(false)}
                                {...register("plano", { required: true })}
                            />
                        </div>
                    </div>
                    {errors?.sus?.type === "required" && (
                        <p className="error-message-input ml">
                            A carterinha é obrigatoria
                        </p>
                    )}
                </div>
                {plan && (
                    <div className="input-container">
                        <label>Plano de saude da criança</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-cadastro"
                            {...register("namePlano", { required: true })}
                        />
                        {errors?.namePlano?.type === "required" && (
                            <p className="error-message-input ml">
                                Digite o plano de saude
                            </p>
                        )}
                    </div>
                )}

                <div className="input-container">
                    <label>Hospital mais próximo</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("nomeHospital", { required: true })}
                    />
                    {errors?.nomeHospital?.type === "required" && (
                        <p className="error-message-input ml">
                            O nome do hospital é obrigatorio
                        </p>
                    )}
                </div>

                <div className="input-cep-uf padding-bt">
                    <div className="input-cep-container">
                        <label htmlFor="">CEP</label>
                        <div className="box-cep">
                            <input
                                className="input-cep"
                                type="text"
                                {...register("hospitalCep", { required: true })}
                            />
                            <div></div>
                            <input
                                type="text"
                                className="input-cep-digito"
                                {...register("hospitalDigito", {
                                    required: true,
                                })}
                            />
                        </div>
                        {(errors?.hospitalCep?.type === "required" ||
                            errors?.hospitalDigito?.type === "required") && (
                            <p className="error-message-input ml">
                                O endereco é obrigatorio
                            </p>
                        )}
                    </div>

                    <div className="input-uf-container">
                        <label htmlFor="">UF</label>
                        <input
                            type="text"
                            {...register("ufHospital", { required: true })}
                        />
                        {errors?.ufHospital?.type === "required" && (
                            <p className="error-message-input-uf">
                                O UF é obrigatoria
                            </p>
                        )}
                    </div>
                </div>

                <div className="input-container">
                    <label>Rua</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("ruaHospital", { required: true })}
                    />
                    {errors?.ufHospital?.type === "required" && (
                        <p className="error-message-input">
                            A rua é obrigatoria
                        </p>
                    )}
                </div>

                <div className="input-container">
                    <label>
                        Cuidados especificos que a creche deve ter com a
                        crianaça
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("cuidados", { required: true })}
                    />
                </div>
            </div>
            <div className="box-medicamento-2">
                <div className="is-PCD-container">
                    <div className="pcd-check-container">
                        <span>PCD</span>
                        <div>
                            <div>
                                <label htmlFor="isPcd">Sim</label>
                                <input
                                    type="checkbox"
                                    name="isPcd"
                                    checked={isPcd === true}
                                    id="isPcd"
                                    onClick={() => setIsPcd(true)}
                                    {...register("isPCD", { required: true })}
                                />
                            </div>
                            <div>
                                <label htmlFor="isNotPcd">Não</label>
                                <input
                                    type="checkbox"
                                    checked={isPcd === false}
                                    name="isNotPcd"
                                    id="isNotPcd"
                                    onClick={() => setIsPcd(false)}
                                    {...register("isPCD", { required: true })}
                                />
                            </div>
                        </div>
                        {errors?.ufHospital?.type === "required" && (
                            <p className="error-message-input">
                                Campo obrigatorio
                            </p>
                        )}
                    </div>

                    {isPcd && (
                        <div className="tipo-pcd-container">
                            <span>Tipo</span>

                            <select
                                id="deficiencia"
                                name="deficiencia"
                                {...register("deficiencia", {
                                    validate: (value) => {
                                        return value === "0";
                                    },
                                })}
                            >
                                <option value="0">Selecione...</option>
                                <option value="fisica">
                                    Deficiência Física
                                </option>
                                <option value="auditiva">
                                    Deficiência Auditiva
                                </option>
                                <option value="visual">
                                    Deficiência Visual
                                </option>
                                <option value="intelectual">
                                    Deficiência Intelectual
                                </option>
                                <option value="multipla">
                                    Deficiência Múltipla
                                </option>
                                <option value="psiquica">
                                    Deficiência Psíquica/Mental
                                </option>
                                <option value="surdocegueira">
                                    Surdocegueira
                                </option>
                            </select>
                            {errors?.deficiencia?.type === "validate" && (
                                <p className="error-message-input">
                                    Campo obrigatorio
                                </p>
                            )}
                        </div>
                    )}
                </div>

                <div className="container-plano-saude">
                    <span>Realiza algum tratamento?</span>
                    <div className="container-input-plano">
                        <div>
                            <label htmlFor="temTratamento">Sim</label>
                            <input
                                type="checkbox"
                                checked={tratamento == true}
                                name="temTratamento"
                                id="temTratamento"
                                onClick={() => setTratamento(true)}
                                {...register("tratamento", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="naoTemTratamento">Não</label>
                            <input
                                type="checkbox"
                                checked={tratamento == false}
                                name="naoTemTratamento"
                                id="naoTemTratamento"
                                onClick={() => setTratamento(false)}
                                {...register("tratamento", { required: true })}
                            />
                        </div>
                    </div>
                    {errors?.deficiencia?.type === "validate" && (
                        <p className="error-message-input">Campo obrigatorio</p>
                    )}
                </div>

                {tratamento && (
                    <div className="input-container">
                        <label>Quais tratamentos?</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-cadastro"
                            {...register("descTratamento", { required: true })}
                        />
                        {errors?.descTratamento?.type === "required" && (
                            <p className="error-message-input">
                                Campo obrigatorio
                            </p>
                        )}
                    </div>
                )}

                <div className="tratament-check-container">
                    <span>Toma medicamentos frequentes?</span>
                    <div>
                        <div>
                            <label htmlFor="medicamentos">Sim</label>
                            <input
                                type="checkbox"
                                name="medicamentos"
                                checked={medicamento}
                                onClick={() => setMedicamento(true)}
                                id="medicamentos"
                                {...register("medicamentos", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor="notmedicamentos">Não</label>
                            <input
                                type="checkbox"
                                name="isNotPcd"
                                checked={!medicamento}
                                onClick={() => setMedicamento(false)}
                                id="notmedicamentos"
                                {...register("medicamentos", {
                                    required: true,
                                })}
                            />
                        </div>
                    </div>
                    {errors?.descTratamento?.type === "required" && (
                        <p className="error-message-input">Campo obrigatorio</p>
                    )}
                </div>

                {medicamento && (
                    <>
                        <div className="input-container">
                            <label>Qual medicamento</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="input-cadastro"
                                {...register("descMedicamentos", {
                                    required: true,
                                })}
                            />
                            {errors?.descMedicamentos?.type === "required" && (
                                <p className="error-message-input">
                                    Campo obrigatorio
                                </p>
                            )}
                        </div>

                        <div className="medicamento-horas-quantidade-container">
                            <div>
                                <span>Em quantas horas?</span>
                                <input
                                    {...register("horasMed", {
                                        required: true,
                                    })}
                                    type="text"
                                />
                                {(errors?.quantidadeMed?.type === "required" ||
                                    errors?.horasMed?.type === "required") && (
                                    <p className="error-message-input ml">
                                        O campo é obrigatorio
                                    </p>
                                )}
                            </div>

                            <div>
                                <span>Quantidade</span>
                                <input
                                    {...register("quantidadeMed", {
                                        required: true,
                                    })}
                                    type="text"
                                />
                            </div>
                        </div>
                    </>
                )}

                <div className="alergias-check-container">
                    <span>Possui alergia a comidas?</span>
                    <div>
                        <div>
                            <label htmlFor="comidas">Sim</label>
                            <input
                                type="checkbox"
                                name="comidas"
                                checked={comidas}
                                id="comidas"
                                onClick={() => setComidas(true)}
                                {...register("comidas", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="notcomidas">Não</label>
                            <input
                                type="checkbox"
                                name="isNotPcd"
                                id="notcomidas"
                                checked={!comidas}
                                onClick={() => setComidas(false)}
                                {...register("comidas", { required: true })}
                            />
                        </div>
                    </div>
                    {errors?.comidas?.type === "required" && (
                        <p className="error-message-input">Campo obrigatorio</p>
                    )}
                </div>

                {comidas && (
                    <div className="input-container">
                        <label>Comidas alégicas</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-cadastro"
                            {...register("descComidas", { required: true })}
                        />
                        {errors?.descComidas?.type === "required" && (
                            <p className="error-message-input">
                                Campo obrigatorio
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicamentoCadastro;
