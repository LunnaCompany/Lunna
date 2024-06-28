import React, { useEffect, useState } from "react";
import "./Avisos.css";
import CardAviso from "../../../components/plataforma-components/cardAviso/CardAviso";
import add from "../../../assets/add-aviso.png";
import Turma from "../../../components/plataforma-components/Turmas/Turma";
import { AddTurma } from "../../../components/plataforma-components/addTurma/addTurma";
import AddAlunoTurma from "../../../components/plataforma-components/addAlunoTurma/AddAlunoTurma";
import AddAviso from "../../../components/plataforma-components/addAviso/AddAviso";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";

const Avisos = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [temaAviso, setTemaAviso] = useState("laranja-aviso");
    const [listDiscentes, setListDiscentes] = useState([]);
    const [avisos, setAvisos] = useState([]);
    

    useEffect(() => {
        const fechDataAviso = async () => {
            const response = await axios.get("http://localhost:8080/aviso");
            console.log(response.data);
            setAvisos(response.data);
        };

        fechDataAviso();
    }, []);

    const closeAll = () => {
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleNextStep = () => {
        if ((step >= 0) & (step < 3)) {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        if ((step > 1) & (step <= 3)) {
            setStep(step - 1);
        }
    };

    const handlePostTurma = (data) => {
        try {
            const response = axios.post(
                "http://localhost:8080/turma",
                {
                    nomeTurma: data.nomeTurma,
                    quantidadeAlunos: listDiscentes.length,
                    periodo: data.periodo,
                    tema: temaAviso,
                    discentes: listDiscentes,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Funciono " + JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.log(error);
        }
    };

    const handlePostAviso = (data) => {
        try {
            const response = axios.post("http://localhost:8080/aviso", {
                tituloAviso: data.tituloTurma,
                conteudoAviso: data.conteudoAviso,
                importancia: data.importancia,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        handleNextStep();

        if (step === 2) {
            handlePostTurma(data);
        }

        if (step === 3) {
            handlePostAviso(data);
            setOpen(false);
            setStep(0);
        }
    };

    return (
        <div className="page-avisos">
            {avisos.map((data) => (
                <CardAviso data={data} />
            ))}

            <div className="btn-add-new-aviso" onClick={() => setOpen(true)}>
                <img src={add} alt="" />
            </div>

            {open && (
                <AnimatePresence>
                    <Turma
                        setOpen={setOpen}
                        handleNextStep={handleNextStep}
                        setStep={setStep}
                    />
                </AnimatePresence>
            )}
            {step === 1 && (
                <AnimatePresence>
                    <AddTurma
                        register={register}
                        errors={errors}
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        setTemaAviso={setTemaAviso}
                    />
                </AnimatePresence>
            )}
            {step === 2 && (
                <AnimatePresence>
                    <AddAlunoTurma
                        closeAll={closeAll}
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        setListDiscentes={setListDiscentes}
                    />
                </AnimatePresence>
            )}

            {step === 3 && (
                <AnimatePresence>
                    <AddAviso
                        register={register}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                    />
                </AnimatePresence>
            )}
        </div>
    );
};

export default Avisos;
