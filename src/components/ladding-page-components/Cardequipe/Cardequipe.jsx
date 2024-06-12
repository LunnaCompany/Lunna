import "./style.css";
import git from "../../../assets/GitHub.png";
import linke from "../../../assets/LinkedIn.png";
import { motion } from "framer-motion";

export function Cardequipe({ dados }) {
    return (
        <div className="card-equipe">
            <div className="box-picture-equipe">
                <div className="foto-container-equipe">
                    <motion.img
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0 }}
                        className="picture-adult-equipe"
                        src={dados.picture_adult}
                    />
                    <motion.img
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hend-equipe"
                        src={dados.hand}
                        alt="mao"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="foto-cri-equipe"
                >
                    <div className="img-aaaaaaa">
                    <img src={dados.picture_kid} alt="" />
                    </div>
                </motion.div>
            </div>

            <div className="container-names">
                <div className="name">
                    <h3>{dados.nome}</h3>
                    <a href={dados.github} target="blank">
                        <img src={git} alt="" />
                    </a>
                    <a href={dados.linkedin} target="blank">
                        <img src={linke} alt="" />
                    </a>
                </div>

                <div className="funcion-developer">
                    <span className="primeiro"> {dados.cargo_principal}</span> |{" "}
                    <span className="segundo">{dados.cargo_secundario}</span>
                </div>
            </div>
        </div>
    );
}
