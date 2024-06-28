import React, { useEffect, useState } from "react";
import "./Editar-crianca.css";
import fotocrianca from "../../../../assets/fotocrianca.png";
import { IoCamera } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { Cardparenteedit } from "./card-parente-edit-crianca/Card-parente-edit-crianca";
import parente1 from "../../../../assets/parente1.png";
import parente2 from "../../../../assets/Parente2.png";
import parente3 from "../../../../assets/Parente3.png";

import { FaChevronLeft } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
import axios from "axios";

function Editarcrianca(props) {
    const email = localStorage.getItem("email");
    const [imagePerfilDisc, setImagePerfilDisc] = useState("");
    const [dataDiscente, setDataDiscente] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://localhost:8080/responsavel/email/${email}`
            );
            await fetchPerfilDisc(
                encodeURIComponent(response.data.discentes[0].imgDisc)
            );

            setDataDiscente(response.data.discentes[0]);
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

    const dataCardparenteedit = [
        {
            parente: parente1,
            nome: "Rute Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Avó",
            Contato: "(11) 99999-9999",
        },

        {
            parente: parente2,
            nome: "Douglas Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Tio",
            Contato: "(11) 99999-9999",
        },

        {
            parente: parente3,
            nome: "João Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Avô",
            Contato: "(11) 99999-9999",
        },
    ];
    return (
        <div className="Background-editar-crianca">
            <div className="container-perfil-edit">
                <div className="edit-crianca">
                    <div className="perfil-crianca-edit">
                        <div className="btn-voltar-tela-edit-crianca">
                            <FaChevronLeft
                                color="orange"
                                size={40}
                                onClick={() => props.setEdit(!props.edit)}
                            />
                        </div>
                        <div className="section-edit-perfil-crianca">
                            <div className="img-perfil-edit-crianca">
                                <img src={getImage(imagePerfilDisc)} alt="" />
                                <button className="picture-perfil-edit-crianca">
                                    <IoCamera color="#fff" size="20" />
                                </button>
                            </div>
                            <div className="info-perfil-edit-nome">
                                <h2>Gabriel Pereira Dos Anjos</h2>
                                <ul>
                                    <li>
                                        {" "}
                                        <strong>Nome da Creche:</strong> Jardim
                                        da Infância Alegria <FaPen size={14} />{" "}
                                    </li>
                                    <li>
                                        <strong>Idade:</strong> 04{" "}
                                        <FaPen size={14} />{" "}
                                    </li>
                                    <li>
                                        <strong>Altura:</strong> 98 cm{" "}
                                        <FaPen size={14} />{" "}
                                    </li>
                                </ul>
                            </div>
                            <div className="info-perfil-edit-nasc">
                                <ul>
                                    <li>
                                        <strong>Data de nascimento: </strong>{" "}
                                        04/05/2020 <FaPen size={14} />{" "}
                                    </li>
                                    <li>
                                        <strong>Peso:</strong> 16 kg{" "}
                                        <FaPen size={14} />{" "}
                                    </li>
                                    <li>
                                        <strong>PCD:</strong> Sim{" "}
                                        <FaPen size={14} />{" "}
                                    </li>
                                    <li>
                                        <strong>Tipo:</strong> TDAH{" "}
                                        <FaPen size={14} />{" "}
                                    </li>
                                </ul>
                                <div className="btn-add-doc">
                                    <p>Adicionar documentos</p>
                                    <IoCloudUpload size={30} />
                                </div>
                            </div>
                            <div className="btn-perfil-edit">
                                <button className="btn-edit-perfil-crianca-edit">
                                    <FaPen size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="section-edit-info-med">
                            <div className="title-edit-info-med">
                                <h2>Informações Médicas:</h2>
                            </div>
                            <div className="info-edit-med-crianca">
                                <div className="edit-info-crianca-med-sus">
                                    <ul>
                                        <li>
                                            <strong>
                                                Número da Carteirinha do SUS:
                                            </strong>{" "}
                                            12345678901234 <FaPen size={14} />{" "}
                                        </li>
                                        <div className="btn-add-doc">
                                            <p>Adicionar documentos</p>
                                            <IoCloudUpload size={30} />
                                        </div>
                                        <li>
                                            <strong>
                                                Endereço do hospital mais
                                                próximo:{" "}
                                            </strong>{" "}
                                            Av. julio preste <FaPen size={14} />
                                        </li>
                                        <li>
                                            <strong>
                                                Comidas Alergênicas:
                                            </strong>{" "}
                                            Gabriel é alérgico a amendoim e
                                            frutos do mar. <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>
                                                Cuidados específicos:{" "}
                                            </strong>{" "}
                                            Nenhum <FaPen size={14} />{" "}
                                        </li>
                                    </ul>
                                </div>
                                <div className="edit-info-crianca-med-plano">
                                    <ul>
                                        <li>
                                            <strong>Plano de Saúde: </strong>{" "}
                                            Saúde Total <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>
                                                Realiza algum tratamento médico:{" "}
                                            </strong>{" "}
                                            Não <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>Quais:</strong> Nenhum{" "}
                                            <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>
                                                Possui comidas alérgicas:
                                            </strong>{" "}
                                            Sim <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>
                                                Medicamentos que Toma:
                                            </strong>{" "}
                                            Soluções salina <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>Em quantas horas:</strong> 1
                                            a 2 gotas ou jatos em cada narina{" "}
                                            <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            <strong>Quantidade:</strong> 2 a 3
                                            vezes ao dia <FaPen size={14} />{" "}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cont-info-contacts-sos">
                            <div className="title-info-contacts-sos">
                                <h2>Contatos de Emergência:</h2>
                            </div>
                            <div className="section-info-contacts-sos">
                                <div className="info-contacts-sos-nome">
                                    <ul>
                                        <li>
                                            <strong>Nome:</strong>{" "}
                                        </li>
                                        <li>
                                            <strong>
                                                Relação com a criança:
                                            </strong>
                                        </li>
                                        <li>
                                            <strong>
                                                {" "}
                                                Número de Telefone:{" "}
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info-contacts-sos-result">
                                    <ul>
                                        <li>
                                            (11) 98765-4321 <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            Pai <FaPen size={14} />{" "}
                                        </li>
                                        <li>
                                            Marcos dos Anjos <FaPen size={14} />{" "}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-perfil-edit-crianca-dependente">
                        <div className="perfil-edit-crianca-dependente">
                            <div className="title-perfil-edit-dependente">
                                <h2>Quem pode buscar meu filho na creche</h2>
                            </div>
                            <div className="parentes-section-edit-crianca">
                                {dataCardparenteedit.map((cardparenteedit) => (
                                    <Cardparenteedit dados={cardparenteedit} />
                                ))}
                                <div className="container-add-parente-edit-crianca">
                                    <div className="add-parente-edit-crianca">
                                        <div className="section-add-parente-edit-crianca">
                                            <p>Adicionar</p>
                                            <button className="btn-add-parente-edit-crianca">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editarcrianca;
