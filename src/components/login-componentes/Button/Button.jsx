import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

export default function Button({ nomeBtn, handleSubmit, onSubmit }) {
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
            <button
                onClick={() => {
                    handleSubmit(onSubmit)();
                    scrollToPage("/Lunna-landing-page/perfil", "cadastro");
                }}
            >
                {nomeBtn}
            </button>
        </>
    );
}
