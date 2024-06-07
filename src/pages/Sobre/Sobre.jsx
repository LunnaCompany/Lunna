import React from "react";
import { MainSobre } from "./mainSobre/MainSobre";
import { SectionMissao } from "./sectionMissao/SectionMissao";
import { NavBar } from "../../components/ladding-page-components/navBar/NavBar";
import { Equipe } from "./Equipe/Equipe";
import Rodape from "../../components/ladding-page-components/Rodape/Rodape";
import QuemSomosSection from "./quemSomosSection/QuemSomosSection";
import { SignificationSection } from "./significationSection/significationSection";

const Sobre = ({ translateText, translate }) => {
    return (
        <>
            <NavBar translateText={translateText} handleTranslate={translate} />
            <MainSobre translateText={translateText} />
            <SectionMissao translateText={translateText} />
            <QuemSomosSection translateText={translateText} />
            <SignificationSection translateText={translateText} />
            <Equipe translateText={translateText} />
            <Rodape translateText={translateText} />
        </>
    );
};

export default Sobre;
