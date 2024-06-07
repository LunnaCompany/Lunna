import imageMainSobre from "../../../assets/img-main-sobre.png";
import imagenuvem from "../../../assets/img-nuvens-sobre.png";
import "./style.css";
import { motion } from "framer-motion";

export function MainSobre() {
    return (
        <section id="sobre" className="banner-sobre">
            <div className="main-banner-sobre">
                <img src={imageMainSobre} />
                <h2>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="white"
                    >
                        NOSSA{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="azulclaro"
                    >
                        MISSÃO
                    </motion.span>
                    ,
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rosachoque"
                    >
                        VISÃO{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="white"
                    >
                        E{" "}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="amarelosol"
                    >
                        VALORES
                    </motion.span>
                </h2>
                <div className="nuvem">
                    <img src={imagenuvem} />
                </div>
            </div>
        </section>
    );
}
