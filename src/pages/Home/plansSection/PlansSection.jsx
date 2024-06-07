import React from "react";
import "./style.css";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Img from "../../../assets/img.png";
import Estrela from "../../../assets/estrela.png";
import CardPlans from "../../../components/ladding-page-components/cardPlans/CardPlans";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export const PlansSection = () => {
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
            valor: "R$0",
            subtitulo: "Teste 30 dias gratis",
            icone1: Icon1,
            icone2: Icon2,
            beneficio1: "Comunicação direta por chat com os professores.",
            beneficio2:
                "Rotina diaria de atividades e cronograma de alimentação.",
            beneficio3:
                "Mural de atividades feitas em sala e fotos para guardar de recordação.",
            beneficio4:
                "Notificação com ordem de prioridade e aviso prévio do horario de saida e entrada.",

            contentLateral: ["F", "r", "e", "e"],
            color: "azul-plans",
            animationY: -35,
        },
        {
            valor: "R$0",
            subtitulo: "Economize 15% com a mensalidade. ",
            icone1: Icon1,
            icone2: Icon2,
            beneficio1: "Comunicação direta por chat com os professores.",
            beneficio2:
                "Rotina diaria de atividades e cronograma de alimentação.",
            beneficio3:
                "Mural de atividades feitas em sala e fotos para guardar de recordação.",
            beneficio4:
                "Notificação com ordem de prioridade e aviso prévio do horario de saida e entrada.",
            contentLateral: ["M", "e", "n", "s", "a", "l"],
            color: "rosa-plans",
            animationY: 35,
        },
        {
            valor: "R$0",
            subtitulo: "Economize 200% com o nosso plano anual. ",
            icone1: Icon1,
            icone2: Icon2,

            beneficio1: "Comunicação direta por chat com os professores.",
            beneficio2:
                "Rotina diaria de atividades e cronograma de alimentação.",
            beneficio3:
                "Mural de atividades feitas em sala e fotos para guardar de recordação.",
            beneficio4:
                "Notificação com ordem de prioridade e aviso prévio do horario de saida e entrada.",
            contentLateral: [Estrela, "A", "n", "u", "a", "l"],
            color: "roxo-plans",
            animationY: -35,
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
                            <CardPlans data={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <img className="decoration-plans-section" src={Img} alt="" />
        </section>
    );
};
