import React from "react";
import { MainHome } from "./mainHome/Home";
import { NavBar } from "../../components/ladding-page-components/navBar/NavBar";
import { InfoSection } from "./InfoSection/InforSection";
import { TestimonySection } from "./TestimonySection/TestimonySection";
import QuestionsSection from "./questionsSection/QuestionsSection";
import { CardsBenefits } from "../../components/ladding-page-components/cardsBenefits/CardsBenefits";
import ResourceSection from "./resourceSection/ResourceSection";
import Rodape from "../../components/ladding-page-components/Rodape/Rodape";
import ContactSection from "./contactSection/ContactSection";
import { PlansSection } from "./plansSection/PlansSection";

const Home = ({ translateText, handleTranslate }) => {
    return (
        <>
            <NavBar
                translateText={translateText}
                handleTranslate={handleTranslate}
            />
            <MainHome translateText={translateText} />
            <InfoSection translateText={translateText} />
            <ResourceSection translateText={translateText} />
            <CardsBenefits translateText={translateText} />
            <PlansSection translateText={translateText} />
            <ContactSection translateText={translateText} />
            <TestimonySection translateText={translateText} />
            <QuestionsSection translateText={translateText} />
            <Rodape translateText={translateText} />
        </>
    );
};

export default Home;
