import React from "react";
import "./style.css";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Img from "../../../assets/img.png";
import Estrela from "../../../assets/estrela.png";
import CardPlans from "../../../components/ladding-page-components/cardPlans/CardPlans";

import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const PlansSection = ({translateText}) => {
    const [slidePerView, setSlidePerView] = useState(3);

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth <= 1100) {
                setSlidePerView(2);
            }
            if (window.innerWidth <= 800) {
                setSlidePerView(1);
            }
            if (window.innerWidth > 1100) {
                setSlidePerView(3);
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
            precodesconto: "De R$1200 por",
            valor: "R$900",
            subtitulo: translateText.subtitulo02,
            icone1: Icon1,
            icone2: Icon2,
            beneficio1: translateText.beneficio1,
            beneficio2: translateText.beneficio2,
            beneficio3: translateText.beneficio3,
            beneficio4: translateText.beneficio4,
            beneficio5: translateText.beneficio5,
            contentLateral: [],
            color: "rosa-plans",
            animationY: 35,
            nomePlan: "Sementinha"
        },
        {
            precodesconto: "De R$1800 por",
            valor: "R$1.440",
            subtitulo: translateText.subtitulo,
            icone1: Icon1,
            icone2: Icon2,
            beneficio1: translateText.beneficio1,
            beneficio2: translateText.beneficio2,
            beneficio3: translateText.beneficio3,
            beneficio4: translateText.beneficio4,
            beneficio5: translateText.beneficio6,
            
            contentLateral: [],
            color: "roxo-plans",
            animationY: -35,
            nomePlan: "Brincadeira"
        },
        {
            preecodesconto01: "R$ 1.00 por discente",
            valor: "Personalizável",
            subtitulo: translateText.subtitulo01,
            icone1: Icon1,
            icone2: Icon2,
            beneficio1: translateText.beneficio1,
            beneficio2: translateText.beneficio2,
            beneficio3: translateText.beneficio3,
            beneficio4: translateText.beneficio4,
            beneficio5: translateText.beneficio7,
            contentLateral: [],
            color: "azul-plans",
            animationY: -35,
            nomePlan: "Crescer"
        },
        
    ];

    return (
        <section className="plans-section">
            <div id="planos" className="nossos-planos">
                <h2>Nossos planos</h2>
            </div>

            <div className="cards-plans-section">
                <Swiper
                    className="container-plans-corousel"
                    slidesPerView={slidePerView}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                >
                    {dataCard.map((card, index) => (
                        <SwiperSlide
                            key={index}
                            className="container-plans-corousel"
                        >
                            <CardPlans translateText={translateText} data={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <img className="decoration-plans-section" src={Img} alt="" />
        </section>
    );
};
