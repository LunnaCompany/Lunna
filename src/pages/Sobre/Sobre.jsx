import React from "react";
import { MainSobre } from "./mainSobre/MainSobre";
import { SectionMissao } from "./sectionMissao/SectionMissao";
import { NavBar } from "../../components/ladding-page-components/navBar/NavBar";
import { Equipe } from "./Equipe/Equipe";
import Rodape from "../../components/ladding-page-components/Rodape/Rodape";
import QuemSomosSection from "./quemSomosSection/QuemSomosSection";
import { SignificationSection } from "./significationSection/significationSection";
import { MaosSignificadosCores } from "../../components/ladding-page-components/NossasCoresLunna/MaosSignificadosCores/MaosSignificadosCores";
import { NossasCoresTitulo } from "../../components/ladding-page-components/NossasCoresLunna/NossasCoresTitulo/NossasCoresTitulo";
import LogoSobreNos from "../../components/ladding-page-components/LogoSobreNos/LogoSobreNos";

export function Sobre({ translateText, handleTranslate }) {
    return (
        <>
            <NavBar
                translateText={translateText}
                handleTranslate={handleTranslate}
            />
            <MainSobre translateText={translateText} />
            <SectionMissao translateText={translateText} />
            <QuemSomosSection translateText={translateText} />
            <SignificationSection translateText={translateText} />
            <>
                <NossasCoresTitulo />
                <MaosSignificadosCores />
            </>

            <LogoSobreNos />
            <Equipe translateText={translateText} />
            <Rodape translateText={translateText} />
        </>
    );
}

export default Sobre;
