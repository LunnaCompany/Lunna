import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
    TextsLandingPage,
    TextsLandingPage_en,
    TextsLandingPage_fr,
    TextsLandingPage_es,
} from "../texts/Texts";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Cadastro from "../pages/cadastro/Cadastro";
import Login from "../pages/login/Login";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import TemplateMainPlataforma from "../pages/plataforma/TemplateMainPlataforma/TemplateMainPlataforma";
import PerfilDiscente from "../components/plataforma-components/perfil-discente/Perfil-discente";
import PerfilMemoria from "../components/plataforma-components/Perfil-Memoria/Perfil-Memoria";
import Atividades from "../pages/plataforma/Atividades/Atividades";
import Avisos from "../pages/plataforma/avisos/Avisos";
import TemplateSecundaryPlataforma from "../pages/plataforma/TemplateSecundaryPlataforma/TemplateSecundaryPlataforma";

export const RoutesLunna = () => {
    const [translateText, setTranslateText] = useState(TextsLandingPage);
    const isAuthenticated = !!localStorage.getItem("token");
    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (
            !token &&
            location.pathname !== "/Lunna-landing-page/login" &&
            location.pathname !== "/" &&
            location.pathname !== "/Lunna-landing-page" &&
            location.pathname !== "/Lunna-landing-page/sobre-nos"
        ) {
            navigate("/Lunna-landing-page/login", { replace: true });
            console.log("executando");
        }
    }, [navigate]);

    useEffect(() => {
        const tokenr =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJsdW5uYSIsInN1YiI6ImFudGhvbnljaHVrd3VkaTA1QG91dGxvb2suY29tIiwiZXhwIjoxNzE3NzE5NDcxfQ.LkscoW3DD05E7hiuc2zuHUk5w_ledv8DI1H5AT1t82E";

        const fetchData = async () => {
            try {
                const response = axios.get( 
                    "http://localhost:8080/responsavel",
                    {
                        headers: {
                            Authorization: `Bearer ${tokenr}`,
                        },
                    }
                );
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
    }, [navigate]);

    const checkValidadeteToken = (token) => {
        if (!token) {
            return false;
        }

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 100;
            if (decodedToken.exp < currentTime) {
                return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    };

    const translate = (language) => {
        if (language == "Inglês") {
            setTranslateText(TextsLandingPage_en);
        }
        if (language == "Português") {
            setTranslateText(TextsLandingPage);
        }
        if (language == "Francês") {
            setTranslateText(TextsLandingPage_fr);
        }
        if (language == "Espanhol") {
            setTranslateText(TextsLandingPage_es);
        }
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        translateText={translateText}
                        handleTranslate={translate}
                    />
                }
            />
            <Route
                path="/Lunna-landing-page"
                element={
                    <Home
                        translateText={translateText}
                        handleTranslate={translate}
                    />
                }
            />
            <Route
                path="/Lunna-landing-page/sobre-nos"
                element={
                    <Sobre
                        translateText={translateText}
                        handleTranslate={translate}
                    />
                }
            />

            <Route path="/Lunna-landing-page/cadastro" element={<Cadastro />} />
            <Route path="/Lunna-landing-page/login" element={<Login />} />

            <Route
                path="/Lunna-landing-page/perfil"
                element={
                    <TemplateMainPlataforma>
                        <PerfilDiscente />
                    </TemplateMainPlataforma>
                }
            />

            <Route
                path="/Lunna-landing-page/memoria"
                element={
                    <TemplateMainPlataforma>
                        <PerfilMemoria />
                    </TemplateMainPlataforma>
                }
            />

            <Route
                path="/Lunna-landing-page/atividade"
                element={
                    <TemplateMainPlataforma>
                        <Atividades />
                    </TemplateMainPlataforma>
                }
            />

            <Route
                path="/Lunna-landing-page/avisos"
                element={
                    <TemplateSecundaryPlataforma>
                        <Avisos />
                    </TemplateSecundaryPlataforma>
                }
            />
        </Routes>
    );
};
