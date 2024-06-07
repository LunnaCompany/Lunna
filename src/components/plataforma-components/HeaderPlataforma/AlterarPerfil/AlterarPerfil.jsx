import React from "react";
import "./AlterarPerfil.css";
import Upload from "./img/upload.png";
import MaeFilho from "./img/mae-filho.jpg";
import Background from "./img/background.jpg";
import { IoChevronBackOutline } from "react-icons/io5";
// Importação do FrameMotion
import { motion } from "framer-motion";
//
export default function AlterarPerfil(props) {
    //
    const dropIn = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring,",
                damping: 15,
                stiffness: 500,
            },
        },
        exit: { y: "100vh", opacity: 0 },
    };
    //
    return (
        <div className="background">
            <motion.section
                className="section"
                whileHover={{ scale: 1.05 }}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
            >
                <div className="superior">
                    <motion.div whileHover={{ scale: 1.12 }}>
                        <IoChevronBackOutline
                            size={50}
                            onClick={() => props.setOverlay(false)}
                            className="alterar-perfil-icon"
                            color="white"
                        />
                    </motion.div>
                </div>
                <div className="container">
                    <div className="mudar-foto-perfil">
                        <img src={MaeFilho} alt="foto" />

                        <p>Mudar foto de perfil</p>
                    </div>
                    <div className="alterar-background">
                        <div className="background-atual">
                            <img src={Background} />
                        </div>
                        <div className="background-novo">
                            <p>Subir nova capa</p>
                            <img src={Upload} />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
