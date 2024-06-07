import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CardBenefits from "../cardBenefits/CardBenefits";
import titleBenefits from "../../../assets/benefits-title.png";
import imgCard1 from "../../../assets/img-card-benefits-1.png";
import imgCard2 from "../../../assets/img-card-benefits-2.png";
import imgCard3 from "../../../assets/img-card-benefits-3.png";
import imgCard4 from "../../../assets/img-card-benefits-4.png";
import imgCard5 from "../../../assets/img-card-benefits-5.png";
import imgCard6 from "../../../assets/img-card-benefits-6.png";
import imgCard7 from "../../../assets/img-card-benefits-7.png";
import "./style.css";

export const CardsBenefits = ({ translateText }) => {
    const [slidePerView, setSlidePerView] = useState(2.75);

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth <= 1100) {
                setSlidePerView(2);
            }
            if (window.innerWidth <= 800) {
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

    const dataCard = [
        {
            image: imgCard1,
            content: translateText.card_beneficios_1_txt,
            color: "rosa-benefits",
        },

        {
            image: imgCard2,
            content: translateText.card_beneficios_2_txt,
            color: "azul-benefits",
        },

        {
            image: imgCard3,
            content: translateText.card_beneficios_3_txt,
            color: "roxo-benefits",
        },

        {
            image: imgCard4,
            content: translateText.card_beneficios_1_txt,
            color: "rosa-benefits",
        },
        {
            image: imgCard5,
            content: translateText.card_beneficios_1_txt,
            color: "rosa-benefits",
        },

        {
            image: imgCard6,
            content: translateText.card_beneficios_2_txt,
            color: "azul-benefits",
        },

        {
            image: imgCard7,
            content: translateText.card_beneficios_3_txt,
            color: "roxo-benefits",
        },
    ];

    return (
        <section className="section-benefits">
            <img
                id="beneficios"
                className="title-benefits"
                src={titleBenefits}
                alt=""
            />

            <Swiper
                slidesPerView={slidePerView}
                modules={[Pagination, Autoplay]}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                className="container-carousel-benefits"
            >
                {dataCard.map((card, index) => (
                    <SwiperSlide className="slide-benefits" key={index}>
                        <CardBenefits
                            image={card.image}
                            content={card.content}
                            color={card.color}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="btn-benefits">{translateText.cadastrar_txt}</div>
        </section>
    );
};
