import { useEffect, useState } from "react";
import "./Agenda-lunna.css";
import fotopqnpedagogo from "../../../assets/fotopqnpedagogo.png";
import { Cardrotina } from "../Agenda-lunna/Card-rotina/Card-rotina";
import fotomae from "../../../assets/foto-responsavel-mae.png";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import axios from "axios";

function Agendalunna() {
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

    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

    const dataCardrotina = [
        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Atividade Recreativa:",
            descriatv: "Pintura ao ar livre.",
            colorcardrotina: "color-rotina-yellow",
            linecardrotina: "color-line-rotina-yellow",
        },

        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Atividade Recreativa:",
            descriatv: "Ciranda-cirandinha.",
            colorcardrotina: "color-rotina-blue",
            linecardrotina: "color-line-rotina-blue",
        },

        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Atividade Recreativa:",
            descriatv: "Artesanato.",
            colorcardrotina: "color-rotina-roxo",
            linecardrotina: "color-line-rotina-roxo",
        },

        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Recreio",

            colorcardrotina: "color-rotina-rosa",
            linecardrotina: "color-line-rotina-rosa",
        },

        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Hora da soneca",
            colorcardrotina: "color-rotina-roxo-esc",
            linecardrotina: "color-line-rotina-roxo-esc",
        },

        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Atividade Recreativa:",
            descriatv: "Leitura.",
            colorcardrotina: "color-rotina-roxo-esc",
            linecardrotina: "color-line-rotina-roxo-esc",
        },

        {
            horario: "06:00 - 08:30 ",
            fotopqn: fotopqnpedagogo,
            atividade: "Atividade Recreativa:",
            descriatv: "Pintura ao ar livre.",
            colorcardrotina: "color-rotina-yellow-esc",
            linecardrotina: "color-line-rotina-yellow-esc",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },

        {
            colorcardrotina: "color-rotina-none",
        },
    ];

    return (
        <>
            <div className="container-total-agenda-lunna">
                <div className="section-agenda">
                    <div className="agenda-cardapio-semanal">
                        <h2>Minha agenda</h2>
                        <div className="sino-container-cardapio-semanal">
                            <div className="sino-cardapio-semanal-section">
                                <FaBell size={15} />
                            </div>
                            <div className="foto-mae-cardapio-semanal">
                                <img src={getImage(imagePerfilDisc)} alt="" />
                                <h3>{dataDiscente.nomeResp}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-tela-agenda-lunna">
                    <div className="container-menu-superior-tela-agenda">
                        <div className="section-data-menu-superior">
                            <p>
                                <strong>Horario</strong>
                            </p>
                            <p>
                                <strong>SEGUNDA</strong>
                            </p>
                            <p>
                                <strong>TERÇA</strong>
                            </p>
                            <p>
                                <strong>QUARTA</strong>
                            </p>
                            <p>
                                <strong>QUINTA</strong>
                            </p>
                            <p>
                                <strong>SEXTA</strong>
                            </p>
                        </div>
                    </div>
                    <div className="cointainer-section-horario-rotina-agenda">
                        <div className="section-horario-atv-tela-agenda">
                            <p>07:00 am</p>
                            <p>09:00 am</p>
                            <p>11:00 am</p>
                            <p>13:00 am</p>
                            <p>15:00 am</p>
                        </div>
                        <div className="container-section-card-tela-rotina">
                            {dataCardrotina.map((cardrotina) => (
                                <Cardrotina dados={cardrotina} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Agendalunna;
