import React from "react";
import AtividadesRecreativas from "../../../components/plataforma-components/AtividadesRecreativas/AtividadesRecreativas";
import Card from "../../../components/plataforma-components/Card/Card";

export default function Atividades() {
    return (
        <div className="content-lunna-atividades">
            <AtividadesRecreativas />
            <div className="content-lunna-cards">
                <Card />
            </div>
        </div>
    );
}
