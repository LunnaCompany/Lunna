import React, { useEffect, useState } from "react";
import "./Perfil-discente.css";
import { FaPen } from "react-icons/fa";
import parente1 from "../../../assets/parente1.png";
import parente2 from "../../../assets/Parente2.png";
import parente3 from "../../../assets/Parente3.png";
import parente4 from "../../../assets/Parente4.png";
import { Cardresponsavel } from "./card-responsalvel/Card-responsavel";
import axios from "axios";
import { ContatoEmergencia } from "./info-contato-emergencia/contato-emergencia";
import Editarcrianca from "./perfil-editar-crianca/Editar-crianca";
function PerfilDiscente() {
    const [imagePerfilDisc, setImagePerfilDisc] = useState("");
    const [dataDiscente, setDataDiscente] = useState([]);

    const email = localStorage.getItem("email");

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

    const [edit, setEdit] = useState(false);
    function handleEdit() {
        setEdit(!edit);
    }

    function CalcIdade() {
        const dataNascimento = new Date(dataDiscente.dataNasDisc);
        const dataAtual = new Date();
        const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        return idade;
    }

    function converterData() {
        // Dividir a data no formato MM/DD/YYYY
        let partes = dataDiscente.dataNasDisc.split("-");

        // Extrair mês, dia e ano
        let mes = partes[1];
        let dia = partes[2];
        let ano = partes[0];

        // Reorganizar para o formato DD/MM/YYYY
        let dataBrasileira = `${dia}/${mes}/${ano}`;

        return dataBrasileira;
    }

    console.log(dataDiscente);

    const dataCardresponsavel = [
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

        {
            parente: parente4,
            nome: "Douglas Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Tio",
            Contato: "(11) 99999-9999",
        },
    ];

    const dataContatoEmergencia = [
        {
            nomeRelacao: dataDiscente?.contato?.nome,
            relacao: dataDiscente?.contato?.parentesco,
            telefoneRelacao: dataDiscente?.contato?.numeroCelular,
        },
    ];

    return (
        <div id="perfil" className="div-tudo">
            <div className="info-cri">
                <div className="info-cri-dois">
                    <div className="foto-perfil-discente">
                        {imagePerfilDisc && (
                            <img
                                src={getImage(imagePerfilDisc)}
                                alt="Imagem de Perfil"
                            />
                        )}
                    </div>

                    <div className="info-kids">
                        <h2>{dataDiscente.nomeDisc}</h2>
                        <ul>
                            <li>
                                {" "}
                                <strong>Nome da Creche: </strong> Lunna
                            </li>
                            <li>
                                {" "}
                                <strong>Data de nascimento: </strong>{" "}
                                {dataDiscente.dataNasDisc && converterData()}
                            </li>
                        </ul>
                    </div>

                    <div className="info-kids-two">
                        <ul>
                            <li>
                                <strong>Idade:</strong> {CalcIdade()}
                            </li>
                            <li>
                                {" "}
                                <strong> Altura: </strong>{" "}
                                {dataDiscente.alturaDisc}
                            </li>
                            <li>
                                {" "}
                                <strong>Peso:</strong> {dataDiscente.pesoDisc}
                            </li>
                        </ul>
                    </div>

                    <div className="btn-edit">
                        <button className="btn-edit">
                            <FaPen size={20} onClick={handleEdit} />
                        </button>
                    </div>
                </div>

                <div className="line"></div>

                <div className="info-med">
                    <div className="info-meio">
                        <h2 className="info-saude-sus-name">
                            Informações de saúde:
                        </h2>
                        <div className="info-sus">
                            <ul>
                                <li>
                                    {" "}
                                    <strong>Carteirinha SUS:</strong>{" "}
                                    {dataDiscente?.fichaMed?.numCartSus}
                                </li>
                                <li>
                                    {" "}
                                    <strong>Plano de Saúde:</strong>{" "}
                                    {dataDiscente?.fichaMed?.planSaud}
                                </li>
                            </ul>
                            <div className="info-med-med">
                                <ul>
                                    <li>
                                        {" "}
                                        <strong> PCD:</strong> Sim
                                    </li>
                                    <li>
                                        {" "}
                                        <strong> Tipo:</strong>{" "}
                                        {dataDiscente.deficiencia}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="info-contact">
                            {dataContatoEmergencia.map((contatoemergencia) => (
                                <ContatoEmergencia dados={contatoemergencia} />
                            ))}
                        </div>
                    </div>
                    <div className="line-two"></div>

                    <div className="info-total">
                        <h2>Contatos de Emergencias:</h2>
                        <ul>
                            <li>
                                {" "}
                                <strong>
                                    {" "}
                                    Endereço do hospital mais próximo:
                                </strong>{" "}
                                {dataDiscente?.fichaMed?.endereco?.rua}
                            </li>
                            <li>
                                {" "}
                                <strong> Nome do hospital:</strong>{" "}
                                {dataDiscente?.fichaMed?.endereco?.nomeHospital}
                            </li>
                            <li>
                                {" "}
                                <strong>
                                    {" "}
                                    Realiza algum tratamento médico:
                                </strong>{" "}
                                {dataDiscente?.fichaMed?.descTratamento}
                            </li>
                            <li>
                                {" "}
                                <strong> Comidas alérgicas: </strong>
                                {dataDiscente?.fichaMed?.comidasAlergicas}
                            </li>

                            <li>
                                {" "}
                                <strong> Cuidados específicos:</strong>{" "}
                                {dataDiscente?.fichaMed?.cuidados}
                            </li>
                            <li>
                                {" "}
                                <strong> Medicações prescritas:</strong>{" "}
                                {dataDiscente?.fichaMed?.remedios}
                            </li>
                            <li>
                                {" "}
                                <strong>Em quantas horas:</strong> de{" "}
                                {dataDiscente?.fichaMed?.qtdHoraMed} em{" "}
                                {dataDiscente?.fichaMed?.qtdHoraMed} horas
                            </li>
                            <li>
                                {" "}
                                <strong>Quantidade:</strong> 2 a 3 vezes ao dia
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="line-tree"></div>
                <div className="section-parentes">
                    <div className="title-parentes">
                        <h2>Quem pode buscar meu filho na creche</h2>
                    </div>
                    <div className="parentes-section">
                        {dataCardresponsavel.map((cardresponsavel) => (
                            <Cardresponsavel dados={cardresponsavel} />
                        ))}
                    </div>
                </div>
            </div>
            {edit && <Editarcrianca edit={edit} setEdit={setEdit} />}
        </div>
    );
}

export default PerfilDiscente;
