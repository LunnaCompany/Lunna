import { CardHome } from "../cardHome/CardHome";
import kid1 from "../../../assets/kid1.png";
import kid2 from "../../../assets/kid2.png";
import kid3 from "../../../assets/kid3.png";
import kid4 from "../../../assets/kid4.png";
import kid5 from "../../../assets/kid5.png";
import kid6 from "../../../assets/kid6.png";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "./style.css";

export const CardsHome = ({ dataSelect, translateText }) => {
    const [loading, setLoading] = useState(false);

    let contentCard = [
        {
            title: translateText.alimentacao_txt,
            content: translateText.alimentacao_card_txt,
            image: kid1,
            color: "purple",
            delay: 0.2,
        },
        {
            title: translateText.guarde_memorias_txt,
            content: translateText.guarde_memorias_card_txt,
            image: kid2,
            color: "yelow",
            delay: 0.3,
        },
        {
            title: translateText.tratamento_especializado_txt,
            content: translateText.tratamento_especializado_card_txt,
            image: kid3,
            color: "blue",
            delay: 0.5,
        },
    ];

    let contentCard2 = [
        {
            title: translateText.alimentacao_txt,
            content: translateText.alimentacao_card_txt,
            image: kid4,
            color: "pink",
            delay: 0.2,
        },
        {
            title: translateText.guarde_memorias_txt,
            content: translateText.guarde_memorias_card_txt,
            image: kid5,
            color: "blue",
            delay: 0.3,
        },
        {
            title: translateText.tratamento_especializado_txt,
            content: translateText.tratamento_especializado_card_txt,
            image: kid6,
            color: "yelow",
            delay: 0.5,
        },
    ];

    const [cards, setCards] = useState(contentCard);
    const [slidePerView, setSlidePerView] = useState(3);

    useEffect(() => {
        let clonedCards = [];

        if (dataSelect === 2) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 10);
            clonedCards = [...contentCard2];
        }
        if (dataSelect === 1) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 10);
            clonedCards = [...contentCard];
        }

        const handlResize = () => {
            if (window.innerWidth > 1000) {
                setSlidePerView(3);
            }
            if (window.innerWidth <= 1000) {
                setSlidePerView(2);
            }
            if (window.innerWidth <= 900) {
                setSlidePerView(1);
            }
            setCards(clonedCards);
        };
        handlResize();

        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("resize", handlResize);
        };
    }, [translateText, window.innerWidth, dataSelect]);

    return (
        <AnimatePresence>
            {loading ? (
                <div className="loadingCard"></div>
            ) : (
                <Swiper
                    className="container-home-corousel"
                    slidesPerView={slidePerView}
                    loop={true}
                    dir="rtl"
                    modules={[Pagination, Autoplay]}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                height: "58%",
                            }}
                            className="container-home-corousel"
                            key={index}
                        >
                            <CardHome
                                title={card.title}
                                content={card.content}
                                image={card.image}
                                color={card.color}
                                delay={card.delay}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </AnimatePresence>
    );
};
