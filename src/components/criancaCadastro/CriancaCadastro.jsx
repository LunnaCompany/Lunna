import React, { useState } from "react";

import "./CriancaCadastro.css";

import NewCriancaForm from "../newCriancaForm/NewCriancaForm";
import NewContatoForm from "../newContatoForm/NewContatoForm";

const CriancaCadastro = ({ register, errors, cpfDiscente}) => {
    const [criancaForms, setCriancaForms] = useState([{ id: 0 }]);
    const [nextIdCrianca, setNextIdCrianca] = useState(1);

    const [contatoForms, setContatoForms] = useState([{ id: 0 }]);
    const [nextIdContato, setNextIdContato] = useState(1);

    const adicionarCriancaForm = () => {
        setCriancaForms([...criancaForms, { id: nextIdCrianca }]);
        setNextIdCrianca(nextIdCrianca + 1);
    };

    const adicionarContatoForm = () => {
        setContatoForms([...contatoForms, { id: nextIdContato }]);
        setNextIdContato(nextIdContato + 1);
    };

    console.log(contatoForms);



    return (
        <div className="cadastro-crianca-container">
            {criancaForms.map((form) => (
                <NewCriancaForm
                    key={form.id}
                    id={form.id}
                    cpfDiscente={cpfDiscente}
                    addNewForm={adicionarCriancaForm}
                    register={register}
                    errors={errors}
                />
            ))}
            {contatoForms.map((form) => (
                <NewContatoForm
                    key={form.id}
                    id={form.id}
                    addNewForm={adicionarContatoForm}
                    register={register}
                    errors={errors}
                />
            ))}
        </div>
    );
};

export default CriancaCadastro;
