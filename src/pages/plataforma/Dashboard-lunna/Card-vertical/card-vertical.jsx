import React from "react";
import "./card-vertical.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Cardvertical({ dados }) {
    const navigate = useNavigate();

    const scrollToPage = (page, elementId) => {
        navigate(page);

        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 800,
                smooth: true,
                offset: -50,
            });
        }, 10);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: dados.delay }}
            onClick={() => scrollToPage(dados.rota, "dashboard")}
        >
            <div
                className={`section-card-vertical-dashboard ${dados.colorvertical}`}
            >
                <div className="icon-section-tela-dashboard">{dados.icon}</div>
            </div>
        </motion.div>
    );
}
