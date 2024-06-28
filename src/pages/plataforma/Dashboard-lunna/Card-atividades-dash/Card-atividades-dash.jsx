import React from "react";
import "./Card-atividades-dash.css";
import { motion } from "framer-motion";

export function Cardatividadesdash({ dados }) {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: dados.delay }}
                className={`container-card-atividades-geral ${dados.color}`}
            >
                <div className="sections-bolinhas-a-b-c-card">
                    <div className="bolihha-a-card-container">A</div>
                    <div className="bolihha-b-card-container">b</div>
                    <div className="bolihha-c-card-container">C</div>
                </div>
                <div className="section-title-atividades-card">
                    <h3>{dados.atividades}</h3>
                </div>
            </motion.div>
        </div>
    );
}
