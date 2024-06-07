import React from "react";
import { CardResorce } from "../cardResorce/CardResorce";
import imgCard1 from "../../../assets/img-resorce-1.png";
import imgCard2 from "../../../assets/img-resorce-2.png";
import imgCard3 from "../../../assets/img-resorce-3.png";
import imgCard4 from "../../../assets/img-resorce-4.png";
import imgCard5 from "../../../assets/img-resorce-5.png";
import imgCard6 from "../../../assets/img-resorce-6.png";
import imgCard7 from "../../../assets/img-resorce-7.png";
import imgCard8 from "../../../assets/img-resorce-8.png";
import imgCard9 from "../../../assets/img-resorce-9.png";
import "./style.css";

export const CardsResorce = ({translateText}) => {
    const dataResorce = [
        {
            image: imgCard1,
            text: translateText.card_recursos_1_txt,
            delay: 0.2,
        },
        {
            image: imgCard2,
            text: translateText.card_recursos_2_txt,
            delay: 0.3,
        },
        {
            image: imgCard3,
            text: translateText.card_recursos_3_txt,
            delay: 0.4,
        },
        {
            image: imgCard4,
            text: translateText.card_recursos_4_txt,
            delay: 0.5,
        },
        {
            image: imgCard5,
            text: translateText.card_recursos_5_txt,
            delay: 0.6,
        },
        {
            image: imgCard6,
            text: translateText.card_recursos_6_txt,
            delay: 0.7,
        },
        {
            image: imgCard7,
            text: translateText.card_recursos_7_txt,
            delay: 0.8,
        },
        {
            image: imgCard8,
            text: translateText.card_recursos_8_txt,
            delay: 0.9,
        },
        {
            image: imgCard9,
            text: translateText.card_recursos_9_txt,
            delay: 1,
        },
    ];
    return (
        <div className="container-resorce">
            {dataResorce.map((card, index) => (
                <CardResorce key={index} image={card.image} text={card.text} delay={card.delay}/>
            ))}
        </div>
    );
};
