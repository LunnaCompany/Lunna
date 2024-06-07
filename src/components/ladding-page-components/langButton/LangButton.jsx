import React, { useState } from "react";
import brasil from "../../../assets/brasil.png";
import franca from "../../../assets/franca.png";
import ingles from "../../../assets/reino-unido.png";
import espanhol from "../../../assets/espanha.png";
import "./style.css";

const LangButton = ({ handleTranslate }) => {
    const [openDrop, setOpenDrop] = useState(false);

    const [selectdCountry, setselectdCountry] = useState({
        coutryName: "Português",
        coutryImage: brasil,
    });

    const handleOpenDrop = () => {
        setOpenDrop(!openDrop);
    };

    const handleSelectCountry = (name, image) => {
        setselectdCountry({
            coutryName: name,
            coutryImage: image,
        });
        handleOpenDrop();
    };

    return (
        <div className={`lang-button  ${openDrop && "lang-button-open"}`}>
            <div className="lang-content">
                <img src={selectdCountry.coutryImage} alt="" />
                <span>{selectdCountry.coutryName}</span>
            </div>

            {openDrop && (
                <div className="lang-drop">
                    <div
                        className="lang-content"
                        onClick={() => {
                            handleSelectCountry("Inglês", ingles);
                            handleTranslate("Inglês");
                        }}
                    >
                        <img src={ingles} alt="" />
                        <span>Inglês</span>
                    </div>
                    <div className="lang-drop">
                        <div
                            className="lang-content"
                            onClick={() => {
                                handleSelectCountry("Espanhol", espanhol);
                                handleTranslate("Espanhol");
                            }}
                        >
                            <img src={espanhol} alt="" />
                            <span>Espanhol</span>
                        </div>
                        <div className="lang-drop">
                            <div
                                className="lang-content"
                                onClick={() => {
                                    handleSelectCountry("Francês", franca);
                                    handleTranslate("Francês");
                                }}
                            >
                                <img src={franca} alt="" />
                                <span>Francês</span>
                            </div>
                            <div className="lang-drop last-drop">
                                <div
                                    className="lang-content"
                                    onClick={() => {
                                        handleSelectCountry(
                                            "Português",
                                            brasil
                                        );
                                        handleTranslate("Português");
                                    }}
                                >
                                    <img src={brasil} alt="" />
                                    <span>Português</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <label className="arrow-lang">
                <input
                    className="arrow-input"
                    checked={openDrop}
                    type="checkbox"
                    onChange={handleOpenDrop}
                />
                <svg
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="chevron-down"
                >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
            </label>
        </div>
    );
};

export default LangButton;
