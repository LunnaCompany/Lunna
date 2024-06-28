import React from "react";
import TitleParceiros from "./TituloParceiros/TituloParceiros";
import "./SecaoParceiros.css";

// Cards

import CardIncluiDev from "./CardsParceiros/CardIncluiDev";
import CardAfroGlow from "./CardsParceiros/CardAfroGlow";
export function SecaoParceiros() {
    return (
        <section className="section-secao-parceiros">
            <TitleParceiros />
            <div className="icones-secao-parceiros">
                <CardAfroGlow />
                <CardIncluiDev />
            </div>
        </section>
    );
}
