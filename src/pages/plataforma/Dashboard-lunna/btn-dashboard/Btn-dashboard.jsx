import React from "react";
import "./Btn-dashboard.css";
import { IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export function Btndashboard({ dados }) {
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
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: dados.delay }}
        >
            <div
                onClick={() =>
                    scrollToPage("/Lunna-landing-page/avisos", "dashboard")
                }
                className={`btn-avisos-tela-dasboard ${dados.colorbtn}`}
            >
                <div
                    className={`text-btn-chevron-tela-dasboard ${dados.colortitle}`}
                >
                    <p>{dados.descricaobtn} </p> <IoChevronForward size={35} />
                </div>
            </div>
        </motion.div>
    );
}
