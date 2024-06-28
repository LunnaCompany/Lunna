import React from "react";
import "./AcceptCookies.css";
import { MdOutlineCookie } from "react-icons/md";
import { useState } from "react";
import PoliticaPrivacidade from "./PoliticaPrivacidade/PoliticaPrivacidade.jsx";

export function AcceptCookies() {
    const [acceptCookies, setAcceptCookies] = useState(true);
    const [modelPoliticaPrivacidade, setModelPoliticaPrivacidade] =
        useState(false);

    return (
        <>
            {acceptCookies && (
                <div className="acceptCookies">
                    <MdOutlineCookie size={70} color="white" />
                    <div className="acceptCookies-conteudo">
                        <h4>Nós usamos cookies.</h4>
                        <p>
                            Utilizamos cookies para personalizar sua
                            experiência. Ao continuar a visitar este site, você
                            concorda com o uso de cookies.
                        </p>
                        <div
                            className="politica-privacidade-text"
                            onClick={() => setModelPoliticaPrivacidade(true)}
                        >
                            Política de Privacidade
                        </div>
                    </div>
                    <div className="acceptCookies-button">
                        <button onClick={() => setAcceptCookies(false)}>
                            Aceitar todos os cookies
                        </button>
                        <button onClick={() => setAcceptCookies(false)}>
                            Rejeitar todos os cookies
                        </button>
                    </div>
                </div>
            )}
            {modelPoliticaPrivacidade && (
                <PoliticaPrivacidade
                    modelPoliticaPrivacidade={modelPoliticaPrivacidade}
                    setModelPoliticaPrivacidade={setModelPoliticaPrivacidade}
                />
            )}
        </>
    );
}
