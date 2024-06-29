import React from "react";
import "./CardIncluiDev.css";

import Imagem03 from "../imgIncluiDev/bloquinhos-incluidev.png";
import Imagem04 from "../imgIncluiDev/bloquinhos1-incluidev.png";
import IncluiDevLogo from "../imgIncluiDev/incluidev-logo.png";
import { motion } from "framer-motion";
function CardIncluiDev() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0, x: 0 }}
            transition={{ duration: 0.8 }}
            className="icone-incluidev"
        >
            <div className="icone-incluidev-logo">
                <img src={Imagem03} alt="" />
            </div>
            <div className="conteudo-incluidev">
                <img src={IncluiDevLogo} alt="" />
                <p>
                    Plataforma de inclusão, criada para ensinar pessoas com
                    necessidades especiais a se adaptarem no mundo da
                    programação!
                </p>
                <button>
                    <a href="https://linktr.ee/incluidev" target="_blank">
                        Saiba mais
                    </a>
                </button>
            </div>
            <div className="vetores-incluidev-inferior">
                <img src={Imagem04} />
            </div>
        </motion.div>
    );
}

export default CardIncluiDev;
