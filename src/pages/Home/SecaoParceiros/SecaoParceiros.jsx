import React, { useEffect, useState } from "react";
import TitleParceiros from "./TituloParceiros/TituloParceiros";
import "./SecaoParceiros.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import CardIncluiDev from "./CardsParceiros/CardIncluiDev";
import CardAfroGlow from "./CardsParceiros/CardAfroGlow";
import Cardconectavel from "./CardsParceiros/cardConectavel/Cardconectavel";

export function SecaoParceiros() {
    const [slidePerView, setSlidePerView] = useState(2);

    return (
        <section className="section-secao-parceiros">
            <TitleParceiros />
            <div className="icones-secao-parceiros">
                <Swiper
                    slidesPerView={2}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                >
                    <SwiperSlide>
                        <CardAfroGlow />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardIncluiDev />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Cardconectavel />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
