import React from "react";
import mira from "../../../assets/img-missao.png";
import escada from "../../../assets/img-visao.png";
import valores from "../../../assets/img-valores.png";
import "./style.css";
import { motion } from "framer-motion";

export const SectionMissao = ({translateText}) => {
    return (
        <section className="section-missao">
            <div className="mira">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src={mira}
                />
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mira-conteudo"
                >
                    <h2>{translateText.titulomissao}</h2>
                    <p>
                        {translateText.descricaomissao}
                    </p>
                </motion.div>
            </div>
            <div className="mira">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src={escada}
                />
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mira-conteudo"
                >
                    <h2>{translateText.titulovisao}</h2>
                    <p>
                        {translateText.descricaovisao}
                    </p>
                </motion.div>
            </div>
            <div className="valores-card">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="imgvalores"
                    src={valores}
                />
                <div className="valores-card-conteudo">
                    <h2>{translateText.titulovalor}</h2>
                    <ol>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span>{translateText.descricaospan1} </span>{translateText.descricaovalor1}
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span>{translateText.descricaospan2}</span>{translateText.descricaovalor2}
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <span>{translateText.descricaospan3}</span>{translateText.descricaovalor3}
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <span>{translateText.descricaospan4}</span>{translateText.descricaovalor4}
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <span>{translateText.descricaospan5}</span>{translateText.descricaovalor5}
                        </motion.li>
                    </ol>
                </div>
            </div>
        </section>
    );
};
