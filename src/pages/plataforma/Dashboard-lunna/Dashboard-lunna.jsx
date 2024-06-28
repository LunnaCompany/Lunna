import "./Dashboard-lunna.css";
import lunnalogo from "../../../assets/logo.png";
import { FaBell } from "react-icons/fa";
import { Cardatividadesdash } from "../Dashboard-lunna/Card-atividades-dash/Card-atividades-dash";
import { LuClipboardList } from "react-icons/lu";
import { Cardvertical } from "../Dashboard-lunna/Card-vertical/card-vertical";
import { FaUtensils } from "react-icons/fa";
import fotomae01 from "../../../assets/fotoresponsavel.png";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import fotofamilia01 from "../../../assets/Foto-familia01.png";
import { Btndashboard } from "../Dashboard-lunna/btn-dashboard/Btn-dashboard";
import fotolummi from "../../../assets/foto-lummi.png";
import { AiFillClockCircle } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboardlunna() {
    const navigate = useNavigate();
    const [nomeFilho, setNomeFilho] = useState("");
    const [imagePerfilDisc, setImagePerfilDisc] = useState("");
    const [dataDiscente, setDataDiscente] = useState([]);

    const email = localStorage.getItem("email");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://localhost:8080/responsavel/email/${email}`
            );
            await fetchPerfilDisc(
                encodeURIComponent(response.data.ftPerfilResp)
            );

            setDataDiscente(response.data);
            setNomeFilho(response.data.discentes[0].nomeDisc);
        };

        const fetchPerfilDisc = async (image) => {
            const response = await axios.get(
                `http://localhost:8080/images?filename=${image}`,
                { responseType: "arraybuffer" }
            );

            setImagePerfilDisc(response.data);
        };

        fetchData();
    }, [email]);

    console.log(dataDiscente);

    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

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

    const dataCardatividadesdash = [
        {
            atividades: "Atividades recreativas",
            color: "card-rosa",
            delay: 0.2,
        },

        {
            atividades: "Atividades linguísticas",
            color: "card-roxo",
            delay: 0.4,
        },

        {
            atividades: "Atividades comportamentais",
            color: "card-roxo-escuro",
            delay: 0.6,
        },
    ];

    const dataCardvertical = [
        {
            icon: <LuClipboardList size={40} />,
            colorvertical: "color-laranja",
            delay: 0.2,
            rota: "enquete",
        },

        {
            icon: <FaUtensils size={40} />,
            colorvertical: "color-red",
            delay: 0.4,
            rota: "/Lunna-landing-page/cardapio",
        },

        {
            icon: <AiFillClockCircle size={40} />,
            colorvertical: "color-blue",
            delay: 0.6,
            rota: "enquete",
        },

        {
            icon: <FaComments size={40} />,
            colorvertical: "color-green",
            delay: 0.8,
            rota: "/Lunna-landing-page/chat",
        },

        {
            icon: <FaUser size={40} />,
            colorvertical: "color-red",
            delay: 1,
            rota: "/Lunna-landing-page/perfil",
        },
    ];

    const dataBtndashboard = [
        {
            descricaobtn: "Essa semana a creche...",
            delay: 0.4,
        },

        {
            descricaobtn: "Essa semana a creche...",
            colorbtn: "color-white",
            colortitle: "color-title-black",
            delay: 0.6,
        },
    ];

    return (
        <>
            <div className="sidebar-tela-dashboard-lunna">
                <div className="agenda-geral-tela-dashboard">
                    <img src={lunnalogo} alt="" />
                    <h2>Agenda Geral</h2>
                </div>
                <div className="notificacao-tela-dashboard">
                    <div className="sino-tela-dashboard">
                        <FaBell color="#000" />
                    </div>
                </div>
            </div>
            <div className="container-tela-dashboard-lunna">
                <div className="section-atividades-total-tela-dashboard">
                    <div className="card-container-atividades-geral">
                        {dataCardatividadesdash.map((cardatividadesdash) => (
                            <Cardatividadesdash dados={cardatividadesdash} />
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="ia-lummi-tela-dashboard"
                            onClick={() =>
                                scrollToPage(
                                    "/Lunna-landing-page/lumi",
                                    "dashboard"
                                )
                            }
                        >
                            <div className="container-section-title-lummi">
                                <p>
                                    <strong>Olá! No que posso ajudar?</strong>
                                </p>
                            </div>
                            <img src={fotolummi} alt="" />
                        </motion.div>
                    </div>

                    <div className="container-card-vertical-dashboard">
                        {dataCardvertical.map((cardvertical) => (
                            <Cardvertical dados={cardvertical} />
                        ))}
                    </div>
                </div>

                <div className="sidebar-right-tela-dashboard">
                    <motion.div
                        className="picture-mae-id-tela-dashboard"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <img src={getImage(imagePerfilDisc)} alt="" />
                        <p>
                            <strong>
                                {dataDiscente.nomeResp}, Responsável do(a){" "}
                                {nomeFilho}
                            </strong>
                        </p>
                    </motion.div>

                    <motion.div
                        className="section-title-fotos-chevron-tela-dasboard"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="title-recentes-tela-dashboard">
                            <p>Fotos recentes</p>
                            <div className="chevron-tela-dashboard">
                                <IoChevronBack size={25} />{" "}
                                <IoChevronForward size={25} />
                            </div>
                        </div>

                        <div className="img-family-tela-dashboard">
                            <img src={fotofamilia01} alt="" />
                        </div>
                    </motion.div>
                    <div className="section-avisos-tela-dashboard">
                        <p>
                            <span>Avisos</span>
                        </p>
                        {dataBtndashboard.map((btndashboard) => (
                            <Btndashboard dados={btndashboard} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboardlunna;
