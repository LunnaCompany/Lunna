import { Cardequipe } from "../../../components/ladding-page-components/Cardequipe/Cardequipe";
import davimachado from "../../../assets/davift.png";
import davicri from "../../../assets/davicri.png";
import abraaocri from "../../../assets/abraaocri.png";
import anthocri from "../../../assets/anthocri.png";
import educri from "../../../assets/educri.png";
import elicri from "../../../assets/elicri.png";
import elift from "../../../assets/elift.png";
import lucascri from "../../../assets/lucascri.png";
import lunacri from "../../../assets/lunacri.png";
import tefacri from "../../../assets/tefacri.png";
import handblue from "../../../assets/handblue.png";
import handebluewhite from "../../../assets/handebluewhite.png";
import handgreen from "../../../assets/handgreen.png";
import handrosa from "../../../assets/handrosa.png";
import handrosashock from "../../../assets/handrosashock.png";
import handroxo from "../../../assets/handroxo.png";
import handyellow from "../../../assets/handyellow.png";
import lucasft from "../../../assets/lucasft.png";
import abraaoft from "../../../assets/abraaoft.png";
import anthoft from "../../../assets/anthoft.png";
import eduft from "../../../assets/eduft.png";
import raquelft from "../../../assets/raquelft.png";
import tefaft from "../../../assets/tefaft.png";
import "./style.css";

export function Equipe({translateText}) {
    const dataEquipe = [
        {
            nome: "Davi Machado",
            cargo_principal: "PO",
            cargo_secundario: "Front-End",
            picture_adult: davimachado,
            picture_kid: davicri,
            hand: handroxo,
            linkedin: "https://www.linkedin.com/in/davibmachado/",
            github: "https://github.com/DaviBMachado",
        },

        {
            nome: "Raquel Luna",
            cargo_principal: "Scrum master",
            cargo_secundario: "Front-End",
            picture_adult: raquelft,
            picture_kid: lunacri,
            hand: handblue,
            github: "https://github.com/Lulunna",
            linkedin: "https://www.linkedin.com/in/lucas-ferreira-199000190/",
        },
        {
            nome: "Abraão Santos",
            cargo_principal: "Financeiro",
            cargo_secundario: "Back-end",
            picture_adult: abraaoft,
            picture_kid: abraaocri,
            hand: handyellow,
            github: "https://github.com/TechAbraao",
            linkedin:
                "https://www.linkedin.com/in/abraaosvs/",
        },

        {
            nome: "Eliana Silva",
            cargo_principal: "Designer UI | UX",
            cargo_secundario: "Front-End",
            picture_adult: elift,
            picture_kid: elicri,
            hand: handrosa,
            github: "https://github.com/Eliana100",
            linkedin: "https://www.linkedin.com/in/elianaalmeida/",
        },

        {
            nome: "Lucas Vilarindo",
            cargo_principal: "Social Media",
            cargo_secundario: "Front-End",
            picture_adult: lucasft,
            picture_kid: lucascri,
            hand: handebluewhite,
            github: "https://github.com/LucasVilarindo",
            linkedin: "https://www.linkedin.com/in/LucasVilarindo/",
        },

        {
            nome: "Anthony Ndubisi",
            cargo_principal: "Desenvolvedor",
            cargo_secundario: "Full-stack",
            picture_adult: anthoft,
            picture_kid: anthocri,
            hand: handrosashock,
            github: "https://github.com/anthonyDev01",
            linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        },

        {
            nome: "Stefany Rocha",
            cargo_principal: "Social Media",
            cargo_secundario: "Front-End",
            picture_adult: tefaft,
            picture_kid: tefacri,
            hand: handroxo,
            github: "https://github.com/Stefany3108",
            linkedin: "https://www.linkedin.com/in/stefanybr/",
        },

        {
            nome: "Eduardo Santos",
            cargo_principal: "Desenvolvedor",
            cargo_secundario: "Full-stack",
            picture_adult: eduft,
            picture_kid: educri,
            hand: handgreen,
            github: "https://github.com/EduardoS-Silva",
            linkedin: "https://www.linkedin.com/in/eduardo-santos-361a672ba/",
        },
    ];
    
    return (
        <section className="section-equipe">
            <h2 className="title">{translateText.rostosportras}</h2>
            <div className="container-cards-equipe">
                {dataEquipe.map((equipe, index) => (
                    <Cardequipe key={index} dados={equipe} />
                ))}
            </div>
        </section>
    );
}
