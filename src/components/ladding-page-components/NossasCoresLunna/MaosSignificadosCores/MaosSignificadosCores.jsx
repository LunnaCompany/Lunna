import React from "react";
import "./MaosSignificadosCores.css";

import MaoRosa from "../image/mao-rosa-vetor.png";
import MaoRoxa from "../image/mao-roxa-vetor.png";
import MaoAzul from "../image/mao-azul.png";
import MaoLaranja from "../image/mao-laranja.png";
import MaoAmarelo from "../image/mao-amarela.png";
import MaoVerde from "../image/mao-verde.png";
import { motion } from "framer-motion";

const dataSignificados = [
    {
        indexSignificados: "1",
        corTextoSignificados: "#F967BF",
        altSignificados: "Mão Rosa",
        descricaoSignificado: "Empatia e Cuidado",
        imgMaoSignificados: MaoRosa,
        delay: 0.3,
        top: -20
    },
    {
        indexSignificados: "2",
        corTextoSignificados: "#8C52FF",
        altSignificados: "Mão Roxa",
        descricaoSignificado: "Criatividade e Imaginação",
        imgMaoSignificados: MaoRoxa,
        delay: 0.45,
        top: -17
    },
    {
        indexSignificados: "3",
        corTextoSignificados: "#3BC3FD",
        altSignificados: "Mão Azul",
        descricaoSignificado: "Tranquilidade e Confiança",
        imgMaoSignificados: MaoAzul,
        delay: 0.55,
        top: -14
    },
    {
        indexSignificados: "4",
        corTextoSignificados: "#FFC659",
        altSignificados: "Mão Azul",
        descricaoSignificado: "Tranquilidade e Confiança",
        imgMaoSignificados: MaoLaranja,
        delay: 0.65,
        top: -20
    },
    {
        indexSignificados: "5",
        corTextoSignificados: "#FFDF5C",
        altSignificados: "Mão Azul",
        descricaoSignificado: "Tranquilidade e Confiança",
        imgMaoSignificados: MaoAmarelo,
        delay: 0.75,
        top: -17
    },

    {
        indexSignificados: "6",
        corTextoSignificados: "#C7F851",
        altSignificados: "Mão Azul",
        descricaoSignificado: "Tranquilidade e Confiança",
        imgMaoSignificados: MaoVerde,
        delay: 0.85,
        top: -17
    },
];

export function MaosSignificadosCores() {
    return (
        <div className="background-maos-significados-cores">
            {dataSignificados.map((significados) => (
                <>
                    <motion.div
                        initial={{ opacity: 0, y: significados.top }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: significados.delay }}
                        className="mao-significados"
                    >
                        <img
                            src={significados.imgMaoSignificados}
                            alt={significados.corTextoSignificados}
                        />
                        <p style={{ color: significados.corTextoSignificados }}>
                            {significados.descricaoSignificado}
                        </p>
                    </motion.div>
                </>
            ))}
        </div>
    );
}
