import React, { useState } from "react";
import "./Avisos.css";
import CardAviso from "../../../components/plataforma-components/cardAviso/CardAviso";
import add from "../../../assets/add-aviso.png";
import Turma from "../../../components/plataforma-components/Turmas/Turma";
import { AddTurma } from "../../../components/plataforma-components/addTurma/addTurma";
import AddAlunoTurma from "../../../components/plataforma-components/addAlunoTurma/AddAlunoTurma";
import AddAviso from "../../../components/plataforma-components/addAviso/AddAviso";
import { AnimatePresence } from "framer-motion";

const Avisos = () => {
    const [open, setOpen] = useState(false);
    const [openNameTurma, setOpenNameTurma] = useState(false);
    const [openAddAluno, setOpenAddAluno] = useState(false);
    const [openAddAviso, setOpenAviso] = useState(false);

    const closeAll = () => {
        setOpen(false);
        setOpenAddAluno(false);
        setOpenAddAluno(false);
    };

    return (
        <div className="page-avisos">
            <CardAviso />
            <CardAviso />
            <CardAviso />
            <CardAviso />

            <div className="btn-add-new-aviso" onClick={() => setOpen(true)}>
                <img src={add} alt="" />
            </div>

            {open && (
                <AnimatePresence>
                    <Turma
                        setOpen={setOpen}
                        setOpenNameTurma={setOpenNameTurma}
                    />
                </AnimatePresence>
            )}
            {openNameTurma && (
                <AnimatePresence>
                    <AddTurma
                        setOpenNameTurma={setOpenNameTurma}
                        setOpenAddAluno={setOpenAddAluno}
                    />
                </AnimatePresence>
            )}
            {openAddAluno && (
                <AnimatePresence>
                    <AddAlunoTurma
                        setOpenNameTurma={setOpenNameTurma}
                        setOpenAddAluno={setOpenAddAluno}
                        setOpenAviso={setOpenAviso}
                        closeAll={closeAll}
                    />
                </AnimatePresence>
            )}

            {openAddAviso && (
                <AnimatePresence>
                    <AddAviso setOpenAviso={setOpenAviso} />
                </AnimatePresence>
            )}
        </div>
    );
};

export default Avisos;
