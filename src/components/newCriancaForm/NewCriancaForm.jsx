import React from "react";
import uploadImg from "../../assets/upload-images.png";

const NewCriancaForm = ({addNewForm, register, errors}) => {
    
    return (
        <div className="info-geral-crianca">
            <div className="cadastro-crianca-box-1">
                <div className="input-container">
                    <label>Nomde completo do(a) filho(a)</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("nomeFilho", {required: true})}
                    />
                    {errors?.nomeFilho?.type === "required" && <p className="error-message-input">O nome é obrigatorio</p>}
                </div>

                <div className="container-altura-peso-data">
                    <div className="container-data-input">
                        <label>Data de nascimento</label>
                        <div>
                            <div className="data-input">
                                <input type="text" {...register("dia", {required: true})}/>
                                <label htmlFor="">Dia</label>
                            </div>

                            <div className="data-input">
                                <input type="text" {...register("mes", {required: true})}/>
                                <label htmlFor="">Mês</label>
                            </div>
                            <div className="data-input">
                                <input type="text" {...register("ano", {required: true})}/>
                                <label htmlFor="">Ano</label>
                            </div>
                        </div>
                        {(errors?.dia?.type === "required" || errors?.mes?.type === "required" || errors?.ano?.type === "required" ) && <p className="error-message-input">A data é obrigatoria</p>}
                    </div>

                    <div className="container-altura-peso-input">
                        <div>
                            <label htmlFor="altura">Altura</label>
                            <input type="text" name="altura" id="altura" {...register("altura", {required: true})}/>
                            {errors?.altura?.type === "required" && <p className="error-message-input ml">A altura é obrigatoria</p>}
                        </div>
                        <div>
                            <label htmlFor="peso">Peso</label>
                            <input type="text" name="peso" id="peso" {...register("peso", {required: true})}/>
                            {errors?.peso?.type === "required" && <p className="error-message-input ml">O peso é obrigatorio</p>}
                        </div>
                    </div>
                  
                </div>

                <div className="container-add-responsavel">
                    <div>
                        <div onClick={addNewForm} className="btn-add-responsavel">+</div>
                        <span>Adicionar uma nova criança</span>
                    </div>
                </div>
            </div>

            <div className="cadastro-crianca-box-2">
                <div className="input-container">
                    <label>CPF</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("cpfCrianca", {required: true})}
                    />
                    {errors?.cpfCrianca?.type === "required" && <p className="error-message-input ml">O CPF é obrigatorio</p>}
                </div>
                <div className="input-container">
                    <label>RG</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("rgCrianca", {required: true})}
                    />
                    {errors?.rgCrianca?.type === "required" && <p className="error-message-input ml">O RG é obrigatorio</p>}
                </div>

                <div className="cointainer-add-document">
                    <span>Adicionar foto ou documento em PDF:</span>
                    <div className="btn-add-document">
                        <span>Adicionar documentos</span>{" "}
                        <img src={uploadImg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCriancaForm;
