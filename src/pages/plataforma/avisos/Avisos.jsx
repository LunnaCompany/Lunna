import React from "react";
import "./Avisos.css";
import CardAviso from "../../../components/plataforma-components/cardAviso/CardAviso";
import add from "../../../assets/add-aviso.png"

const Avisos = () => {
    return (
        <div className="page-avisos">
            <CardAviso />
            <CardAviso />
            <CardAviso />
            <CardAviso />

            <div className="btn-add-new-aviso">
                <img src={add} alt="" />
            </div>
        </div>
    );
};

export default Avisos;
