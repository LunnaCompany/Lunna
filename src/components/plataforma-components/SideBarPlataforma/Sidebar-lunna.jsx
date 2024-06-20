import { useState } from "react";
import "./Sidebar-lunna.css";
import { HiChevronDoubleRight } from "react-icons/hi";
import Lunna from "./img/Lunna.png";
import { LuArrowRightToLine } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { TbAlertSquareRounded } from "react-icons/tb";
import { BiMessageSquareDots } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { PiForkKnife } from "react-icons/pi";
import React from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
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

    function handlerSlidebar() {
        setSidebar(!sidebar);
        console.log(sidebar);
    }

    return (
        <div>
            <nav className={sidebar ? "open-sidebar" : ""} id="sidebar">
                <div className="user">
                    <p className="user_infos">
                        <span className="item-description">
                            <img id="logo-lunna" src={Lunna} />
                        </span>
                    </p>
                    <button onClick={handlerSlidebar} className="open_btn">
                        <HiChevronDoubleRight size="30" />
                    </button>
                </div>

                <div className="sidebar_content">
                    <ul className="side_items">
                        <li className="side-item">
                            <a href="#">
                                <GoHome size="25" color="white" />
                                <span className="item-description">Home</span>
                            </a>
                        </li>
                        <li className="side-item" onClick={() => scrollToPage("/Lunna-landing-page/perfil", "perfil")}>
                            <a href="#">
                                <LuUser size="25" color="white" />
                                <span className="item-description">Perfil</span>
                            </a>
                        </li>
                        <li className="side-item">
                            <a href="#">
                                <BiMessageSquareDots color="white" size="25" onClick={() => scrollToPage("/Lunna-landing-page/chat", "chat")}/>
                                <span className="item-description">Chat</span>
                            </a>
                        </li>
                        <li className="side-item" onClick={() => scrollToPage("/Lunna-landing-page/avisos", "perfil")}>
                            <a href="#">
                                <TbAlertSquareRounded size="25" color="white" />
                                <span className="item-description">Avisos</span>
                            </a>
                        </li>
                        <li className="side-item">
                            <a href="#">
                                <FaRegClock size="25" color="white" />

                                <span className="item-description">Rotina</span>
                            </a>
                        </li>
                        <li className="side-item">
                            <a href="#">
                                <CiViewList
                                    color="white"
                                    size="25"
                                    className="CiViewList"
                                />
                                <span className="item-description">
                                    Enquetes
                                </span>
                            </a>
                        </li>
                        <li className="side-item">
                            <a href="#">
                                <PiForkKnife color="white" size="25" />
                                <span className="item-description">
                                    Alimentação
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logout">
                    <button className="logout_btn">
                        <GoGear size="25" color="white" />
                        <span className="item-description">Configurações</span>
                    </button>
                    <button className="logout_btn" onClick={() => scrollToPage("/Lunna-landing-page", "home")}>
                        <LuArrowRightToLine size="25" color="white" />
                        <span className="item-description">Sair</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
