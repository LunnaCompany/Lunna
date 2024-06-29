import React from "react";
import "./style.css";
import Estrela from "../../../assets/estrela.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const CardPlans = ({ data }) => {
    const navigate = useNavigate();

    const setPlanSave = (plan, preco) => {
        localStorage.setItem("plan", plan);
        localStorage.setItem("preco", preco);
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: data.animationY }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="card-plan"
        >
            <div className="card-plan-box">
                <div className="container-card-plan-content">
                    <h2 className="nome-plano">{data.nomePlan}</h2>
                    <div className="card-plan-content">
                        <div className="head-card-plan">
                            <p id="preco-desconto-altera">
                                {data.preecodesconto01}
                            </p>
                            <p>{data.precodesconto}</p>
                            <h2>{data.valor}</h2>
                            <h3>{data.subtitulo}</h3>
                        </div>
                        <div className="body-card-plan">
                            <div>
                                <img src={data.icone1} alt="" />
                                <p>{data.beneficio1}</p>
                            </div>

                            <div>
                                <img src={data.icone1} alt="" />
                                <p>{data.beneficio2}</p>
                            </div>

                            <div>
                                <img src={data.icone1} alt="" />
                                <p>{data.beneficio3}</p>
                            </div>
                            <div>
                                <img src={data.icone1} alt="" />
                                <p>{data.beneficio4}</p>
                            </div>

                            <div>
                                <img src={data.icone1} alt="" />
                                <p style={{ fontWeight: "bold" }}>
                                    {data.beneficio5}
                                </p>
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

                    <div
                        className="card-plan-btn"
                        onClick={() => setPlanSave(data.nomePlan, data.valor)}
                    >
                        <Link to="/Lunna-landing-page/pagamento">Assinar</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CardPlans;
