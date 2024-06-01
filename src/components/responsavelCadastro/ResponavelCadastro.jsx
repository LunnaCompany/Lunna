import React from "react";
import "./ResponsavelCadastro.css";
import camera from "../../assets/Camera.png";
import uploadImg from "../../assets/upload-images.png";

const ResponavelCadastro = ({register, errors, watch, handleInputFile}) => {
    
    const watchPassword = watch("senha");
   
   
    return (
        <div className="cadastro-responsavel">
            <div className="cadastro-responsavel-esquerda">
                <div className="input-container">
                    <label>Nome completo do responsavel</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        required
                        className="input-cadastro"
                        {...register("nome", {required: true})}

                    />
                    {errors?.nome?.type === "required" && <p className="error-message-input">O nome é obrigatorio</p>}
                </div>

                <div className="input-cep-uf">
                    <div className="input-cep-container">
                        <label htmlFor="">CEP</label>
                        <div className="box-cep">
                            <input className="input-cep" type="text" {...register("cep", {required: true})}/>
                            <div></div>
                            <input type="text" className="input-cep-digito" {...register("cepDigito", {required: true})}/>
                        </div>
                        {errors?.cep?.type === "required" && <p className="error-message-input">O CEP é obrigatorio</p>}
                    </div>

                    <div className="input-uf-container">
                        <label htmlFor="">UF</label>
                        <input className="input-uf" type="text" {...register("uf", {required: true})}/>
                        {errors?.uf?.type === "required" && <p className="error-message-input-uf">A UF é obrigatoria</p>}
                    </div>
                </div>

                <div className="input-container">
                    <label>Rua</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("rua", {required: true})}
                        
                    />
                    {errors?.rua?.type === "required" && <p className="error-message-input">A rua é obrigatoria</p>}
                </div>

                <div className="input-container">
                    <label>Bairro</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("bairro", {required: true})}
                    />
                    {errors?.bairro?.type === "required" && <p className="error-message-input">O bairro é obrigatorio</p>}
                </div>

                <div className="input-numero-telefone">
                    <span className="span-numero-tel">Número de telefone</span>
                    <div className="container-input-ddd-telefone">
                        <div className="input-ddd-container">
                            <input type="text" className="input-ddd" {...register("dddTelefone", {required: true})}/>
                        </div>

                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-telefone"
                            {...register("telefone", {required: true})}
                        />
                        
                    </div>
                    {(errors?.telefone?.type === "required" || errors?.dddTelefone?.type === "required") && <p className="error-message-input">O telefone é obrigatorio</p>}
                </div>

                <div className="input-numero-telefone">
                    <span className="span-numero-tel">Celular</span>
                    <div className="container-input-ddd-telefone">
                        <div className="input-ddd-container">
                            <input type="text" className="input-ddd" {...register("dddCelular")}/>
                        </div>

                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-telefone"
                            {...register("celular", {required: true})}
                        ></input>
                    </div>
                    {(errors?.celular?.type === "required" || errors?.dddCelular?.type === "required") && <p className="error-message-input">O telefone é obrigatorio</p>}
                </div>
            </div>

            <div className="cadastro-responsavel-esquerda">
                <div className="container-foto-perfil">
                    <div className="box-add-foto">
                        <label htmlFor="">Subir foto de perfil:</label>

                        <div className="upload-btn">
                            <label htmlFor="file">Adicionar documentos</label>
                            <input onChange={handleInputFile} type="file" name="perfil" id="file" accept="image/png, image/jpeg" />
                            <img src={uploadImg} alt="" />
                        </div>
                        
                    </div>

                    <div className="ft-perfil-camera-container">
                        <img src={camera} alt="" />
                    </div>
                </div>

                <div className="input-container">
                    <label>RG</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("rg", {required: true})}
                    />
                    {errors?.rg?.type === "required" && <p className="error-message-input">O bairro é obrigatorio</p>}
                </div>

                <div className="input-container">
                    <label>CPF</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("cpf", {required: true})}
                    />
                    {errors?.cpf?.type === "required" && <p className="error-message-input">O CPF é obrigatorio</p>}
                </div>

                <div className="add-document-container">
                    <span className="span-add-document">
                        Adicionar foto ou documento em PDF do RG:
                    </span>

                    <div className="upload-btn-document">
                        <span>Adicionar documentos</span>
                        <img src={uploadImg} alt="" />
                    </div>
                </div>

                <div className="input-container">
                    <label>E-mail</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("email", {required: true})}
                    />
                    {errors?.email?.type === "required" && <p className="error-message-input">O email é obrigatorio</p>}
                </div>

                <div className="input-container">
                    <label>E-mail segundario para recuperação de conta</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("emailSecundario", {required: true})}
                    />
                     {errors?.emailSecundario?.type === "required" && <p className="error-message-input">O email secundario é obrigatorio</p>}
                </div>

                <div className="input-container">
                    <label>Senha</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("senha", {required: true, minLength: 8})}
                    />
                    {errors?.senha?.type === "minLength" && <p className="error-message-input">O minimo de caracteres é 8</p>}
                    {errors?.senha?.type === "required" && <p className="error-message-input">A senha é obrigatoria</p>}
                </div>

                <div className="input-container">
                    <label>Confirmar Senha</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="input-cadastro"
                        {...register("confirmarSenha", {
                            required: true, 
                            minLength: 8,
                            validate: (value) => value === watchPassword })}
                       
                    />
                    {errors?.confirmarSenha?.type === "required" && <p className="error-message-input">A senha é obrigatoria</p>}
                    {errors?.confirmarSenha?.type === "validate" && <p className="error-message-input">As senhas nao sao iguais</p>}
                </div>
            </div>
        </div>
    );
};

export default ResponavelCadastro;
