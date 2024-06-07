import React from "react";
import "./style.css";
import { motion } from "framer-motion";

export const SignificationSection = () => {
    return (
        <section className="section-significado">
            <div className="titulo2">Significado de Lunna</div>
            <div className="div03">
                <div className="content-siginificado">
                    <motion.span
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="igação text-significado"
                    >
                        <span className="inicial">L</span>
                        igação
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="niao text-significado"
                    >
                        <span className="inicial">u</span>nião
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="otificacao text-significado"
                    >
                        <span className="inicial">n</span>utrição
                        
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="utrição text-significado"
                    >
                        <span className="inicial">n</span>
                        otificação
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="companhamento text-significado"
                    >
                        <span className="inicial">a</span>companhamento
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
