import React from "react";
import "./style.css";

const QuemSomosSection = ({translateText}) => {
    return (
        <section className="container-quem-somos">
            <div className="content-quem-somos">
                <h2 className="titulo">Quem somos</h2>
                <p className="subtitulo">
                    {translateText.subtitulosobre1}
                    <br />
                    <br />
                    {translateText.subtitulosobre2}
                    <br />
                    <br />
                    {translateText.subtitulosobre3}
                </p>
            </div>
        </section>
    );
};

export default QuemSomosSection;
