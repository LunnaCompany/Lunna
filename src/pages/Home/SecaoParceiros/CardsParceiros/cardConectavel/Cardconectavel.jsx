import { useState } from "react";
import reactLogo from "./img/react.svg";
import "./Cardconectavel.css";
import logoConectavel from "./img/logo-conectavel.png";

function Cardconectavel() {
    return (
        <>
            <div className="container-card-conectavel">
                <div className="img-logo-conectavel">
                    <img src={logoConectavel} alt="" />
                    <div className="text-card-conectavel">
                        Um <span>ciclo</span> que se
                        <span className="card-renova"> renova </span>
                    </div>
                </div>
                <div className="section-container-descri-card-conectavel">
                    <p>
                        Encontre um circuito de profissionais de reparo e
                        manutenção em eletronica, além de conhecer e contribuir
                        para o descarte correto de eletronicos.
                    </p>
                </div>
                <div className="section-container-btn-card-conectavel">
                    Saiba mais
                </div>
            </div>
        </>
    );
}

export default Cardconectavel;
