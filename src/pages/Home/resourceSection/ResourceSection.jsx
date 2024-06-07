import React from "react";
import { CardsResorce } from "../../../components/ladding-page-components/cardsResorce/CardsResource";
import "./style.css";

const ResourceSection = ({ translateText }) => {
    return (
        <section className="page-resorce">
            <h2 id="recursos" className="title-page-resorce">
                {translateText.nossos_recursos_txt}
            </h2>

            <CardsResorce translateText={translateText} />
        </section>
    );
};

export default ResourceSection;
