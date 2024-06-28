import "./Segundo-redefinir.css";
import Cadeados from "../../../assets/cadeado01.png";
import LogoPalminha from "../../../assets/LogoPalminha.png";
import Onda from "../../../assets/onda1.png";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Segundoredefinir() {
    return (
        <div className="container-tela-redefinir-senha-redefinicao">
            <div className="section-page-recuperacao-senha-tela-redefinir-senha-redefinicao">
                <div className="header-recuperacao-senha-tela-redefinir-senha-redefinicao">
                    <div className="btn-voltar-recuperacao-senha-tela-redefinir-senha-redefinicao">
                        <Link to="/Lunna-landing-page/redefinirsenha">
                            <div className="btn-tela-redefinir-criar-senha-tela-redefinir-senha-redefinicao">
                                <FaChevronLeft size={25} color="#fff" />{" "}
                            </div>
                        </Link>
                    </div>

                    <div className="logo-recuperacao-senha-tela-redefinir-senha-redefinicao">
                        <img src={LogoPalminha} />
                    </div>
                </div>

                <div className="content-recuperaca-senha-tela-redefinir-senha-redefinicao">
                    <div className="cadeados-tela-redefinir-senha-redefinicao">
                        <img src={Cadeados} />
                    </div>

                    <div className="conteudos-recuperacao-senha-tela-redefinir-senha-redefinicao">
                        <div className="redefinir-Senha-tela-redefinir-senha-redefinicao">
                            <h2>Redefinição de senha</h2>
                        </div>

                        <div className="digite-Codigo-tela-redefinir-senha-redefinicao">
                            <p>Crie uma nova senha de 6 a 8 caracteres</p>
                        </div>

                        <div className="container-input-recuperacao-senha-tela-redefinir-senha-redefinicao">
                            <p>Senha</p>
                            <input type="password-tela-redefinir-senha-redefinicao"></input>

                            <p>Confirmar senha</p>
                            <input type="password-tela-redefinir-senha-redefinicao"></input>
                        </div>
                        <Link to="/Lunna-landing-page/senharedefinida">
                            <div className="button-recuperacao-senha-tela-redefinir-senha-redefinicao">
                                <button>Confirmar</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="onda-tela-redefinir-senha-redefinicao">
                    <img src={Onda} />
                </div>
            </div>
        </div>
    );
}

export default Segundoredefinir;
