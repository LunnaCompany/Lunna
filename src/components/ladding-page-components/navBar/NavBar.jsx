import logo from "../../../assets/logo.png";
import "./style.css";

import { BugertButton } from "../bugerButton/BugerButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LangButton from "../langButton/LangButton";
import { scroller } from "react-scroll";

export const NavBar = ({ translateText, handleTranslate }) => {
    const [openNav, setOpenNav] = useState(false);
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

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth <= 1200) {
                setOpenNav(false);
            }
        };
        handlResize();

        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("resize", handlResize);
        };
    }, []);

    const handleOpenNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="" />

            <div className={openNav ? "nav-collapse" : "menu-nav"}>
                <ul>
                    <li>
                        <a
                            onClick={() =>
                                scrollToPage("/Lunna-landing-page", "home")
                            }
                        >
                            {translateText.inicio_txt}
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToPage("/", "recursos")}>
                            {translateText.recursos_txt}
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToPage("/", "beneficios")}>
                            {translateText.beneficios_txt}
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToPage("/", "planos")}>
                            {translateText.planos_txt}
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToPage("/", "contato")}>
                            {translateText.contato_txt}
                        </a>
                    </li>

                    <li>
                        <a onClick={() => scrollToPage("/", "depoimentos")}>
                            {translateText.depoimentos_txt}
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() =>
                                scrollToPage(
                                    "/Lunna-landing-page/sobre-nos",
                                    "sobre"
                                )
                            }
                        >
                            {translateText.sobre_nos_txt}
                        </a>
                    </li>
                </ul>
                <div className="nav-buttons">
                    <div
                        className="register-button"
                        onClick={() =>
                            scrollToPage("/Lunna-landing-page/login", "login")
                        }
                    >
                        {translateText.entrar_txt}
                    </div>
                    <div
                        className="login-button"
                        onClick={() =>
                            scrollToPage(
                                "/Lunna-landing-page/cadastro",
                                "cadastro"
                            )
                        }
                    >
                        {translateText.cadastrar_txt}
                    </div>

                    <LangButton handleTranslate={handleTranslate} />
                </div>
            </div>

            <BugertButton setOpenNav={handleOpenNav} />
        </nav>
    );
};
