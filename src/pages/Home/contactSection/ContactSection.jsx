import React from "react";
import "./style.css";
import celular1 from "../../../assets/celular.png";
import celular2 from "../../../assets/imgMobileLunnaNew.png";
import enviar from "../../../assets/enviar.png";
import { FaRegPaperPlane } from "react-icons/fa";
const ContactSection = ({ translateText }) => {
    return (
        <section id="contato" className="section-contact">
            <div className="section-contact-content">
                <div className="input-group">
                    <h2 className="title-contact">
                        {translateText.title_section_contato_1_txt} <br />
                        {translateText.title_section_contato_2_txt}
                    </h2>
                    <div className="container-input-contact-section">
                        <div className="row-input-box">
                            <div className="input-box">
                                <input
                                    className="full-name"
                                    type="text"
                                    placeholder={
                                        translateText.nome_completo_txt
                                    }
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <input
                                    className="full-name"
                                    type="text"
                                    placeholder={
                                        translateText.numero_para_contato_txt
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="row-input-box">
                            <div className="input-box">
                                <input
                                    className="full-name"
                                    type="email"
                                    placeholder={
                                        translateText.email_para_contato_txt
                                    }
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <input
                                    className="full-name"
                                    type="text"
                                    placeholder={translateText.assunto_txt}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-box">
                            <input
                                className="mensagem"
                                type="text"
                                placeholder={
                                    translateText.digite_sua_mensagem_txt
                                }
                                required
                            />
                            <div className="btn-enviar-contact-section">
                                <FaRegPaperPlane size={25} />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="phone-contact-section" src={celular2} alt="" />
            </div>
        </section>
    );
};

export default ContactSection;
