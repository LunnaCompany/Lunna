import React from "react";
import "./style.css";
import { motion } from "framer-motion";

export const CardResorce = ({ image, text, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: delay }}
            className="card-resorce"
        >
            <img src={image} />
            <h2>{text}</h2>
        </motion.div>
    );
};
