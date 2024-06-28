import "./style.css";
import logo from "../../../assets/lunna-logo.png";
import face from "../../../assets/Facebook.png";
import insta from "../../../assets/Instagram.png";
import linkedin from "../../../assets/linkedInfooter.png";

export function Rodape({ translateText }) {
    return (
        <footer className="footer-lunna">
            <div className="color">
                <div className="footer-content">
                    <div className="logo">
                        <img className="logo" src={logo} alt="" />
                    </div>

                    <ul className="footer-list">
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.inicio_txt}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.recursos_txt}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.beneficios_txt}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.planos_txt}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.contato_txt}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.depoimentos_txt}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                {translateText.sobre_nos_txt}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="device" />

                <div className="footer-contacts">
                    <div className="footer-social-media">
                        <div className="paragrafo">
                            <p>
                                Direitos Autorais © 2024 Lunna Company. Todos os
                                direitos reservados.
                            </p>
                        </div>

                        <div className="footer-img-social">
                            <a href="https://www.instagram.com/lunnacompany/">
                                <img src={insta} alt="" />
                            </a>

                            <a href="https://www.linkedin.com/company/lunnacompany/">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Rodape;
