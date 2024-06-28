import "./Senha-redefinida.css";
import Cadeados from "../../../assets/cadeado-roxo.png";
import LogoPalminha from "../../../assets/LogoPalminha.png";
import Onda from "../../../assets/onda1.png";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Senharedefinida() {
    return (
        <div className="section-tela-recuperacao-senha-redefinida">
            <div className="container-page-recuperacao-senha-redefinida">
                <div className="header-recuperacao-senha-tela-recuperacao-senha-redefinida">
                    <div className="btn-voltar-recuperacao-senha-tela-recuperacao-senha-redefinida">
                        <Link to="/Lunna-landing-page/login">
                            <div className="btn-tela-redefinir-senha-redefinida">
                                <FaChevronLeft color="#fff" size={25} />
                            </div>
                        </Link>
                    </div>
                    <div className="logo-recuperacao-senha-tela-recuperacao-senha-redefinida">
                        <img src={LogoPalminha} />
                    </div>
                </div>
                <div className="content-recuperaca-senha-tela-recuperacao-senha-redefinida">
                    <div className="cadeados-tela-recuperacao-senha-redefinida">
                        <img src={Cadeados} />
                    </div>

                    <div className="conteudos-recuperacao-senha-tela-recuperacao-senha-redefinida">
                        <div className="redefinir-Senha-tela-recuperacao-senha-redefinida">
                            <h2>Senha redefinida</h2>
                        </div>

                        <div className="digite-Codigo-tela-recuperacao-senha-redefinida">
                            <p>
                                Sua senha foi redefinida com sucesso! Volte para
                                a tela de login e entre com a sua conta
                            </p>
                        </div>
                        <Link to="/Lunna-landing-page/login">
                            <div className="button-recuperacao-senha-tela-recuperacao-senha-redefinida">
                                <button>Voltar</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="onda-tela-recuperacao-senha-redefinida">
                    <img src={Onda} />
                </div>
            </div>
        </div>
    );
}

export default Senharedefinida;
