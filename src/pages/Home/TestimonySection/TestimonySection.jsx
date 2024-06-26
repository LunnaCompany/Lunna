import cardImg1 from "../../../assets/card-section-1.png";
import cardImg2 from "../../../assets/card-section-2.png";
import cardImg3 from "../../../assets/card-section-3.png";
import cardImg4 from "../../../assets/card-section-4.png";
import cardImg5 from "../../../assets/card-section-5.png";
import cardImg6 from "../../../assets/card-section-6.png";
import cardImg7 from "../../../assets/card-section-7.png";
import cardImg8 from "../../../assets/card-section-8.png";
import cardImg9 from "../../../assets/card-section-9.png";
import titleImg from "../../../assets/title-depoimentos-img.png";

import "./style.css";
import { TestimonyCard } from "../../../components/ladding-page-components/testimonyCard/TestimonyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export const TestimonySection = ({ translateText }) => {
    const dataCard = [
        {
            title: "Escola - Prof º Rosalita",
            subtitle: "Diretora Marta",
            content:translateText.card_depoimento_1_txt,
            image: cardImg1,
        },
        {
            title: "Escola - Luizer",
            subtitle: "Diretora Paula",
            content:translateText.card_depoimento_2_txt,
            image: cardImg2,
        },
        {
            title: "Escola - Kinte",
            subtitle: "Diretor Ricard",
            content:
            translateText.card_depoimento_3_txt,
            image: cardImg3,
        },
        {
            title: "Escola - Rui beta",
            subtitle: "Diretora Lia",
            content:
                translateText.card_depoimento_4_txt,
            image: cardImg4,
        },
        {
            title: "Escola - Crescendo",
            subtitle: "Diretor Gustavo",
            content:
            translateText.card_depoimento_5_txt,
            image: cardImg5,
        },
    ];

    const dataCard2 = [
        {
            title: "Escola - Prof º Rosalita",
            subtitle: "Diretora Marta",
            content:
            translateText.card_depoimento_6_txt,
            image: cardImg6,
        },
        {
            title: "Escola - Luizer",
            subtitle: "Diretora Paula",
            content:
            translateText.card_depoimento_7_txt,
            image: cardImg7,
        },
        {
            title: "Escola - Kinte",
            subtitle: "Diretor Ricard",
            content:
            translateText.card_depoimento_8_txt,
            image: cardImg8,
        },
        {
            title: "Escola - Rui beta",
            subtitle: "Diretora Lia",
            content:
            translateText.card_depoimento_9_txt,
            image: cardImg9,
        },
        {
            title: "Escola - Crescendo",
            subtitle: "Diretor Gustavo",
            content:
            translateText.card_depoimento_10_txt,
            image: cardImg4,
        },
    ];

    const [slidePerView, setSlidePerView] = useState(2.75);

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth <= 1100) {
                setSlidePerView(2);
            }
            if (window.innerWidth <= 900) {
                setSlidePerView(1);
            }
            if (window.innerWidth > 1100) {
                setSlidePerView(2.75);
            }
        };
        handlResize();

        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("resize", handlResize);
        };
    }, []);

    return (
        <section id="depoimentos" className="testimony-section">
            <div className="content-title-testimony">
                <img src={titleImg} alt="" />
                <h2 className="testimony-title">
                    {translateText.depoimentos_txt}
                </h2>
            </div>
            <div className="carousel-container">
                <Swiper
                    className="carousel-testimony"
                    modules={[Pagination, Autoplay]}
                    slidesPerView={slidePerView}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >
                    {dataCard.map((card, index) => (
                        <SwiperSlide key={index}>
                            <TestimonyCard
                                title={card.title}
                                subtitle={card.subtitle}
                                content={card.content}
                                image={card.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    className="carousel-testimony carousel-rtl"
                    modules={[Pagination, Autoplay]}
                    slidesPerView={slidePerView}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    dir="rtl"
                >
                    {dataCard2.map((card, index) => (
                        <SwiperSlide key={index}>
                            <TestimonyCard
                                title={card.title}
                                subtitle={card.subtitle}
                                content={card.content}
                                image={card.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
