import React from "react";
import "./CardAfroGlow.css";
import Imagem01 from "../imgAfroglow/background-afroglow.png";
import Imagem02 from "../imgAfroglow/afroglow-logo.png";
import { motion } from "framer-motion";
function CardAfroGlow() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0, x: 0 }}
            transition={{ duration: 0.8 }}
            className="icone-afroglow"
        >
            <div className="icone-afroglow-logo">
                <img src={Imagem02} alt="" />
            </div>
            <div className="icone-afroglow-conteudo">
                <p>
                    Aprender a <span>amar</span> e cuidar dos seus{" "}
                    <span>cabelos</span> nunca foi tão divertido!
                </p>
                <button>
                    <a href="https://www.afroglow.com.br" target="_blank">
                        Saiba mais
                    </a>
                </button>
            </div>

            <img src={Imagem01} alt="" id="icone-afroglow-background-ajusta" />
        </motion.div>
    );
}

export default CardAfroGlow;
