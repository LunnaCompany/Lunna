import React, { useEffect, useState } from "react";
import "./AddAlunoTurma.css";
import close from "../../../assets/close-card-turma.png";
import { motion } from "framer-motion";

import axios from "axios";

const AddAlunoTurma = ({
    closeAll,
    onSubmit,
    handleSubmit,
    setListDiscentes,
}) => {
    const [dataDiscente, setDataDiscente] = useState([]);
    const [activeCards, setActiveCards] = useState([]);
    const [selectedChildren, setSelectedChildren] = useState([]);
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
                      imgDisc: data.imgDisc,
                      alturaDisc: data.alturaDisc,
                      cpfDisc: data.cpfDisc,
                      contato: {
                        nome: data?.contato?.nome,
                        numeroTelefone: data?.contato?.numeroTelefone,
                        numeroCelular: data?.contato?.numeroCelular,
                        parentesco: data?.contato?.parentesco
                      },
                      deficiencia: data.deficiencia,
                      fichaMed: {
                        planSaud: data?.fichaMed?.planSaud,
                        cuidados: data?.fichaMed?.cuidados,
                        numCartSus: data?.fichaMed?.numCartSus,
                        remedios: data?.fichaMed?.remedios,
                        comidasAlergicas: data?.fichaMed?.comidasAlergicas
                      },
                      pesoDisc: data.pesoDisc,
                      responsavel: {
                        nomeResp: data?.idResp[0]?.nomeResp,
                        cpfResp: data?.idResp[0]?.cpfResp,
                        emailResp: data?.idResp[0]?.emailResp
                      },

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

    const handleClickCard = (child) => {
        const isActive = activeCards.includes(child.idDisc);
        if (isActive) {
            setActiveCards((prevActiveCards) => prevActiveCards.filter((cardId) => cardId !== child.idDisc));
            setSelectedChildren((prevSelectedChildren) => prevSelectedChildren.filter((c) => c.idDisc !== child.idDisc));
            setListDiscentes((prevSelectedChildren) => prevSelectedChildren.filter((c) => c.idDisc !== child.idDisc));
        } else {
            setActiveCards((prevActiveCards) => [...prevActiveCards, child.idDisc]);
            setSelectedChildren((prevSelectedChildren) => [...prevSelectedChildren, child]);
            setListDiscentes((prevSelectedChildren) => [...prevSelectedChildren, child]);
        }

        console.log("teste: ", selectedChildren);
    };

    const handleSelectAll = () => {
        if (activeCards.length === dataDiscente.length) {
            setActiveCards([]);
            setSelectedChildren([]);
            setListDiscentes([]);
        } else {
            setActiveCards(dataDiscente.map((data) => data.idDisc));
            setSelectedChildren(dataDiscente);
            setListDiscentes(dataDiscente);
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
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container-add-aluno-turma"
            >
                <div className="head-add-aluno-turma">
                    <h2>Criando nova turma</h2>
                    <img onClick={closeAll} src={close} alt="" />
                </div>

                <div className="container-quantidade-alunos">
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
                    <div className="quantidade-alunos">
                        {activeCards.length}/{dataDiscente.length}
                    </div>
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
                            onClick={() => handleClickCard(data)}
                        >
                            <img src={getImage(data.imgDisc)} alt="" />
                            <div>
                                <span>{data.nomeDisc}</span>
                                <span>{CalcIdade(data)} anos</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="container-btn-add-aluno-turma">
                    <div
                        className="btn-add-aluno-turma"
                        onClick={() => {
                            handleSubmit(onSubmit)();
                        }}
                    >
                        continuar
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AddAlunoTurma;
