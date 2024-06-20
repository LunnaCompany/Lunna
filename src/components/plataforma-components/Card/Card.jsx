import React from "react";
import { useState } from "react";
import "./Card.css";
import Overlay from "./Overlay";
//
import IconUm from "./Icons/icon-um.png";
import IconDois from "./Icons/icon-dois.png";
import IconTres from "./Icons/icon-tres.png";
import IconQuatro from "./Icons/icon-quatro.png";
import IconCinco from "./Icons/icon-cinco.png";
//
import IconBig1 from "./img/icon1.png";
import IconBig2 from "./img/icon2.png";
import IconBig3 from "./img/icon3.png";
import IconBig4 from "./img/icon4.png";
import IconBig5 from "./img/icon5.png";
import Background from "./img/background.png";
//
export default function Card(props) {
    //
    const [dataCard, setDataCard] = useState();
    const [overlay, setOverlay] = useState(false);
    //
    function handleOverlay() {
        setOverlay(!overlay);
    }
    const data = [
        {
            img: IconBig1,
            titulo: "Emocional",
            descricao:
                "Durante a de dança, fiquei impressionado com sua capacidade de aprender rapidamente os passos e se mover com graça e confiança. Sua energia contagiante e vontade de se expressar através da dança são verdadeiramente admiráveis.",
            color: "purple-card",
        },
        {
            img: IconBig3,
            titulo: "Emocional",
            descricao: "Durante a   de dança, fiquei impressionado com sua capacidade de aprender rapidamente os passos e se mover com graça e confiança. Sua energia contagiante e vontade de se expressar através da dança são verdadeiramente admiráveis.",
            color: "pink-card",
        },
        {
            img: IconBig5,
            titulo: "Emocional2",
            descricao: "Lorem ipsum dolor sit amet...",
            color: "pinkWhite-card",
        },
        {
            img: IconBig4,
            titulo: "Emocional3",
            descricao: "Lorem ipsum dolor sit amet...",
            color: "blue-card",
        },
        {
            img: IconBig2,
            titulo: "Emocional5",
            descricao: "Lorem ipsum dolor sit amet...",
            color: "yellow-card",
        },
    ];
    function handleCard(index) {
        setDataCard(data[index]);
        setOverlay(true);
    }

    //
    return (
        <>
            <div className="AtividadesRecreativas-Card">
                <div className="AtividadesRecreativas-Background">
                    <p>Atividade do dia: 23/05</p>
                </div>
                <h3 id="AtividadesRecreativas-H3">Musica e Dança</h3>

                <div className="AtividadesRecreativas-Others">
                    <p id="AtividadesRecreativas-Descricao">
                        Durante a aula de dança, fiquei impressionado com sua
                        capacidade de aprender rapidamente os passos e se mover
                        com graça e confiança. Sua energia contagiante e vontade
                        de se expressar através da dança são verdadeiramente
                        admiráveis.
                    </p>
                    <p>Pontos desenvolvidos</p>
                </div>
                <div className="AtividadesRecreativas-Icones">
                    <img
                        src={IconUm}
                        onClick={() => {
                            handleCard(0);
                        }}
                        alt="Imagem"
                    />
                    <img
                        src={IconDois}
                        onClick={() => {
                            handleCard(1);
                        }}
                        alt="Imagem"
                    />
                    <img
                        src={IconTres}
                        onClick={() => {
                            handleCard(2);
                        }}
                        alt="Imagem"
                    />
                    <img
                        src={IconQuatro}
                        onClick={() => {
                            handleCard(3);
                        }}
                        alt="Imagem"
                    />
                    <img
                        src={IconCinco}
                        onClick={() => {
                            handleCard(4);
                        }}
                        alt="Imagem"
                    />
                </div>
            </div>
            {overlay && (
                <Overlay
                    data={dataCard}
                    handleOverlay={handleOverlay}
                    titulo="Lorem ipsium"
                    descricao="Lorem ipsum lorem viverra aliquet commodo quam proin imperdiet aliquet massa et pretium, sapien dictumst augue hac purus tempor rhoncus rutrum mollis bibendum sem. lectus praesent condimentum aenean nibh non nisi eu nisl diam platea per, senectus scelerisque vitae adipiscing risus dictum nibh torquent class. hendrerit donec ut pharetra aliquet."
                />
            )}
        </>
    );
}
