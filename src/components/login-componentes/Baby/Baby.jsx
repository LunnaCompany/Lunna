import React from "react";
import "./Baby.css";
import BabySleep from "./img/baby_login.png";
import BackTo from "./img/backto.png";
import { useNavigate } from "react-router-dom";
export default function Baby() {
    const navigate = useNavigate();

    const scrollToPage = (page, elementId) => {
        navigate(page);

        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 800,
                smooth: true,
                offset: -50,
            });
        }, 10);
    };

    return (
        <>
            <div className="conteiner-baby">
                <div
                    className="imgBackTo"
                    onClick={() => scrollToPage("/Lunna-landing-page", "home")}
                >
                    <img src={BackTo} className="imgBackTo" />
                </div>
                <div className="text">
                    <h2>Olá! É bom vê-los novamente aqui Pais.</h2>
                </div>
                <div className="Baby">
                    <img src={BabySleep} />
                </div>
            </div>
        </>
    );
}
