import React, { useEffect, useState } from "react";
import "./AddAlunoTurma.css";
import close from "../../../assets/close-card-turma.png";

import axios from "axios";

const AddAlunoTurma = ({ closeAll }) => {
    const [dataDiscente, setDataDiscente] = useState([]);
    const [activeCards, setActiveCards] = useState([]);
    useEffect(() => {
        const fetchPerfilDisc = async (image) => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/images?filename=${image}`,
                    { responseType: "arraybuffer" }
                );
                return response.data;
            } catch (error) {
                console.log(error);
                return null;
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/discente"
                );

                const dataWithProfiles = await Promise.all(
                    response.data.map(async (data) => ({
                        idDisc: data.idDisc,
                        nomeDisc: data.nomeDisc,
                        dataNasDisc: data.dataNasDisc,
                        imgDisc: await fetchPerfilDisc(
                            encodeURIComponent(data.imgDisc)
                        ),
                    }))
                );

                setDataDiscente((prevData) => {
                    const newData = dataWithProfiles.filter(
                        (newData) =>
                            !prevData.some(
                                (existingData) =>
                                    existingData.idDisc === newData.idDisc
                            )
                    );
                    return [...prevData, ...newData];
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

    const handleClickCard = (id) => {
        setActiveCards((prevActiveCards) =>
            prevActiveCards.includes(id)
                ? prevActiveCards.filter((cardId) => cardId !== id)
                : [...prevActiveCards, id]
        );
    };

    const handleSelectAll = () => {
        if (activeCards.length === dataDiscente.length) {
            setActiveCards([]);
        } else {
            setActiveCards(dataDiscente.map((data) => data.idDisc));
        }
    };

    function CalcIdade(data) {
        const dataNascimento = new Date(data.dataNasDisc);
        const dataAtual = new Date();
        const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        return idade;
    }

    return (
        <div className="dark-background-turma">
            <div className="container-add-aluno-turma">
                <div className="head-add-aluno-turma">
                    <h2>Criando nova turma</h2>
                    <img onClick={closeAll} src={close} alt="" />
                </div>

                <div className="container-all-criancas">
                    {dataDiscente.map((data) => (
                        <div
                            className={`card-crianca-add-turma ${
                                activeCards.includes(data.idDisc)
                                    ? "active-card-crianca"
                                    : ""
                            }`}
                            key={data.idDisc}
                            onClick={() => handleClickCard(data.idDisc)}
                        >
                            <img src={getImage(data.imgDisc)} alt="" />
                            <div>
                                <span>{data.nomeDisc}</span>
                                <span>{CalcIdade(data)} anos</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="quantidade-alunos">
                    {activeCards.length}/{dataDiscente.length}
                </div>
                <div className="box-selecionar-all-discentes">
                    <label htmlFor="">
                        {activeCards.length === dataDiscente.length
                            ? "Desmarcar Todos"
                            : "Selecionar Todos"}
                    </label>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={handleSelectAll}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddAlunoTurma;
