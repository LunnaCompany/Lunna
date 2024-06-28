import "./style.css";
import { motion } from "framer-motion";

export function CardeCardapio({ dados }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: dados.delay }}
        >
            <div className="container-card-cardapio-tela">
                <div className="section-img-food-telacardapio">
                    <img src={dados.comidaimg} alt="" />
                </div>
                <div className="container-cafe-horario-tela-cardapio">
                    <div className="section-container-nome-food-tela-cardapio">
                        <div className="title-food-tela-cardapio">
                            <p>
                                <strong>{dados.turno}</strong>{" "}
                            </p>
                        </div>
                        <div
                            className={`section-horario-food-tela-cardapio ${dados.colorhorario}`}
                        >
                            <p>
                                <strong>{dados.horario}</strong>{" "}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`container-descricao-food-tela-cardapio ${dados.colordescricao}`}
                    >
                        <p>
                            {" "}
                            <strong>{dados.descricaoComida}</strong>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
