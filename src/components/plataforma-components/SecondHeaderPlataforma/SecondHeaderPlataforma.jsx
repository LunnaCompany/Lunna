import React, { useEffect, useState } from "react";
import "./SecondHeaderPlataforma.css";
import axios from "axios";
import rigth from "../../../assets/arrow-rigth-header.png";
import left from "../../../assets/arrow-left-header.png";

const SecondHeaderPlataforma = () => {
    const [imagePerfil, setImagePerfil] = useState("");
    const [dataDiscente, setDataDiscente] = useState([]);
    const [dataResponsavel, setDataResponsavel] = useState([]);
    const [activeBtn, setActiveBtn] = useState(false);
    const email = localStorage.getItem("email");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://localhost:8080/responsavel/email/${email}`
            );
            await fetchPerfilResp(
                encodeURIComponent(response.data.ftPerfilResp)
            );
            console.log(response.data.discentes[0]);

            setDataDiscente(response.data.discentes[0]);
            setDataResponsavel(response.data)
        };

        const fetchPerfilResp = async (image) => {
            const response = await axios.get(
                `http://localhost:8080/images?filename=${image}`,
                { responseType: "arraybuffer" }
            );

            setImagePerfil(response.data);
        };

        fetchData();
    }, [email]);



    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

    return (
        <div className="second-header-plataforma">
            <div className="content-second-header-plataforma">
                <div className="saudaçoes-second-header-plataforma">
                    <span>Olá {dataResponsavel.nomeResp}!</span>
                    <span>avisos do {dataDiscente.nomeDisc}</span>
                </div>

                <div className="nav-bar-second-header-plataforma">
                    <div className="content-nav-bar-second-header">
                        <h2>Avisos do dia</h2>
                        <span className="title-content-nav-second-header">
                            |
                        </span>
                        <h2 className="date-content-nav-second-header">
                            Abril, 2024
                        </h2>
                    </div>

                    <div className="btn-nav-bar-second-header">
                        <div
                            className={
                                !activeBtn && "btn-nav-bar-scond-active "
                            }
                            onClick={() => setActiveBtn(false)}
                        >
                            <img src={left} alt="" />
                        </div>

                        <div
                            className={activeBtn && "btn-nav-bar-scond-active "}
                            onClick={() => setActiveBtn(true)}
                        >
                            <img src={rigth} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-img-perfil-second-header">
                <div></div>
                <div className="content-perfil-second-header">
                    <img src={getImage(imagePerfil)} alt="" />
                    <span>{dataResponsavel.nomeResp}</span>
                </div>
            </div>
        </div>
    );
};

export default SecondHeaderPlataforma;
