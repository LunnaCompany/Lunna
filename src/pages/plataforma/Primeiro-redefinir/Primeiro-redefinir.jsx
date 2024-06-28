import "./Primeiro-redefinir.css";
import React from "react";
import Cadeados from "../../../assets/cadeado-roxo.png";
import LogoPalminha from "../../../assets/LogoPalminha.png";
import Onda from "../../../assets/onda1.png";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Primeiroredefinir() {
    return (
        <div className="container-tela-recuperacao-codigo">
            <div className="section-page-recuperacao-senha">
                <div className="header-recuperacao-senha">
                    <div className="btn-voltar-recuperacao-senha">
                        <Link to="/Lunna-landing-page/login">
                            <div className="btn-voltar-tela-recuperacao-senha-redefinir">
                                <FaChevronLeft size={25} color="#fff" />
                            </div>
                        </Link>
                    </div>

                    <div className="logo-recuperacao-senha">
                        <img src={LogoPalminha} />
                    </div>
                </div>

                <div className="content-recuperaca-senha">
                    <div className="cadeados">
                        <img src={Cadeados} />
                    </div>

                    <div className="conteudos-recuperacao-senha">
                        <div className="redefinir-Senha">
                            <h2>Redefinição de senha</h2>
                        </div>

                        <div className="digite-Codigo">
                            <p>
                                Digite o código enviado para o seu e-mail de
                                recuperação no campo abaixo.
                            </p>
                        </div>

                        <div className="container-input-recuperacao-senha">
                            <input type="Text"></input>
                            <input type="Text"></input>
                            <input type="Text"></input>
                            <input type="Text"></input>
                            <input type="Text"></input>
                        </div>

                        <div className="button-recuperacao-senha">
                            <Link to="/Lunna-landing-page/alterarsenha">
                                <button>Confirmar</button>
                            </Link>
                        </div>

                        <div className="faca-Login">
                            <p>
                                Já possui cadastro?/
                                <Link to="/Lunna-landing-page/login">
                                    <span id="roxo">Faça login </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="onda">
                    <img src={Onda} />
                </div>
            </div>
        </div>
    );
}
export default Primeiroredefinir;
