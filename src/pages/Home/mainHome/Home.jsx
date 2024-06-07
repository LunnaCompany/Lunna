import "./style.css";
import { motion } from "framer-motion";
import mainImg from "../../../assets/main-image.png";
import { CardsHome } from "../../../components/ladding-page-components/cardsHome/cardsHome";
import { useState } from "react";

export const MainHome = ({ translateText, handleTranslate }) => {
    const [dataCard, setDataCard] = useState(1);

    return (
        <main id="home" className="main-home page">
            <div className="home-container">
                <div className="home-content">
                    <div className="home-content-main">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>Lunna</h1>
                            <h2>{translateText.acompanhamento_kids}</h2>
                            <p>{translateText.inicio_main_text_txt}</p>
                            <motion.div
                                className="button-home-content"
                                initial={{ opacity: 0, x: 0, y: -10 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.46 }}
                            >
                                {translateText.saiba_mais_txt}
                            </motion.div>
                        </motion.div>
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            src={mainImg}
                            alt=""
                        />
                    </div>

                    <div className="button-card-home">
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={
                                dataCard === 1
                                    ? "prev-card-home"
                                    : "next-card-home"
                            }
                            onClick={() => setDataCard(1)}
                        >
                            1
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={
                                dataCard === 1
                                    ? "next-card-home"
                                    : "prev-card-home"
                            }
                            onClick={() => setDataCard(2)}
                        >
                            2
                        </motion.div>
                    </div>

                    <CardsHome
                        translateText={translateText}
                        dataSelect={dataCard}
                    />
                </div>
            </div>
        </main>
    );
};
