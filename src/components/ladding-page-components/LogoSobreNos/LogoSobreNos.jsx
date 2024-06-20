import { useState } from "react";
import "./LogoSobreNos.css";
import logomao01 from "../../../assets/lunna-logo01.png";
import logomao02 from "../../../assets/lunna-logo02.png";
import logomao03 from "../../../assets/lunna-logo03.png";
import maislogosobrenos from "../../../assets/maislogosobrenos.png";
import igualogosobrenos from "../../../assets/igualogosobrenos.png";
import { motion } from "framer-motion";

function LogoSobreNos() {
    return (
        <div>
            <div className="container-logo-sobre-nos">
                <div className="title-logo-sobre-nos">Nossa Logo</div>
                <div className="container-logos-sobre-nos-lunnna">
                    <div className="section-logos-mao-sobre-nos">
                        <motion.img
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="logo-sobre-nos"
                            src={logomao01}
                            alt=""
                        />
                        <img src={maislogosobrenos} alt="" />
                        <motion.img
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="logo-sobre-nos"
                            src={logomao02}
                            alt=""
                        />
                        <img src={igualogosobrenos} alt="" />
                        <motion.img
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                            }}
                            className="logo-sobre-nos"
                            src={logomao03}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoSobreNos;
