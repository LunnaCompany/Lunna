import React from "react";
import mira from "../../../assets/img-missao.png";
import escada from "../../../assets/img-visao.png";
import valores from "../../../assets/img-valores.png";
import "./style.css";
import { motion } from "framer-motion";

export const SectionMissao = () => {
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
                    <h2>Missão</h2>
                    <p>
                        Conectar e fortalecer os laços entre pais, pedagogos e
                        crianças, proporcionando uma experiência de comunicação
                        transparente, colaborativa e enriquecedora na jornada de
                        cuidado e educação infantil.
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
                    <h2>Visão</h2>
                    <p>
                        Ser a principal plataforma de referência no apoio ao
                        desenvolvimento integral das crianças, tornando-se um
                        elo essencial na parceria entre creches e famílias,
                        promovendo um ambiente de confiança, acolhimento e
                        crescimento mútuo.
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
                    <h2>Valores</h2>
                    <ol>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span>Transparência</span>: Priorizamos a
                            comunicação aberta e honesta em todas as interações,
                            garantindo que pais e pedagogos estejam sempre
                            informados sobre o bem-estar e o progresso das
                            crianças na creche.
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span>Colaboração</span>: Acreditamos no poder da
                            parceria entre famílias e instituições de educação
                            infantil para promover o desenvolvimento saudável e
                            feliz das crianças.
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <span>Inovação</span>: Buscamos constantemente novas
                            maneiras de aprimorar nossos serviços e tecnologias,
                            adaptando-nos às necessidades em evolução das
                            famílias e das creches.
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <span>Respeito</span>: Valorizamos a diversidade e a
                            individualidade de cada criança e família,
                            promovendo um ambiente inclusivo e acolhedor para
                            todos.
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <span>Cuidado</span>: Comprometemo-nos a oferecer um
                            ambiente seguro, amoroso e estimulante para o
                            crescimento e o desenvolvimento integral de todas as
                            crianças atendidas pela Lunna.
                        </motion.li>
                    </ol>
                </div>
            </div>
        </section>
    );
};
