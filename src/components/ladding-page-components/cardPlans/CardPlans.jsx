import React from "react";
import "./style.css";
import Estrela from "../../../assets/estrela.png";
import { motion } from "framer-motion";

const CardPlans = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: data.animationY }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="card-plan"
        >
            <div className="card-plan-box">
                <div className="container-card-plan-content">
                    <div className="card-plan-content">
                        <div className="head-card-plan">
                            <h2>{data.valor}</h2>
                            <h3>{data.subtitulo}</h3>
                        </div>
                        <div className="body-card-plan">
                            <div>
                                <img src={data.icone1} alt="" />
                                <p>{data.beneficio1}</p>
                            </div>

                            <div>
                                <img src={data.icone2} alt="" />
                                <p>{data.beneficio2}</p>
                            </div>

                            <div>
                                <img src={data.icone2} alt="" />
                                <p>{data.beneficio3}</p>
                            </div>
                            <div>
                                <img src={data.icone2} alt="" />
                                <p>{data.beneficio4}</p>
                            </div>
                        </div>

                        <div className={"lateral-card-plan " + data.color}>
                            {data.contentLateral.map((content, index) => (
                                <span key={index}>
                                    {content === Estrela && (
                                        <img src={content}></img>
                                    )}

                                    {content !== Estrela && content}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="card-plan-btn">Assinar</div>
                </div>
            </div>
        </motion.div>
    );
};

export default CardPlans;
