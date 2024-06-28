import "./criancas.css";
import logo from "../Crianças/img/logo.png";
import lua from "../Crianças/img/lua.png";
import menino from "../Crianças/img/menino.png";
import seta from "../Crianças/img/seta.png";
import seta2 from "../Crianças/img/seta2.png";
import cri01 from "../Crianças/img/cri-bb01.png";
import cri02 from "../Crianças/img/cri-bb02.png";
import { useNavigate } from "react-router-dom";

function Criancas() {
    const navigate = useNavigate();

    const scrollToPage = (page, elementId) => {
        navigate(page);

        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 800,
                smooth: true,
                offset: -50,
            });
        }, 10);
    };
    return (
        <div className="container-bebes">
            <div className="logoPalminha-tela-bb">
                <img src={logo} />
            </div>
            <div className="title-descri-tela-bb">
                <p>
                    Olá Laura! <br /> Qual anjinho você quer acompanhar agora?
                </p>
            </div>

            <div className="section-fotos-bebe-tela">
                <div className="seta2-tela-bb">
                    <img src={seta2} />
                </div>

                <div className="name-menina-tela-bb">
                    <img src={cri01} />
                    <p>Izabelly</p>
                </div>

                <div className="name-menino-tela-bb">
                    <img id="menino" src={cri02} />
                    <p>Gabriel</p>
                </div>

                <div className="seta-tela-bb">
                    <img id="seta" src={seta} />
                </div>
            </div>

            <div className="sectionbtn-tela-bb">
                <button
                    className="btn-tela-bb"
                    onClick={() =>
                        scrollToPage(
                            "/Lunna-landing-page/dashboard",
                            "dashboard"
                        )
                    }
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}

export default Criancas;
