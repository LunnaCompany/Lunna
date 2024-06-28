import React from "react";
import "./LumiIcon.css";
import LumiIconImage from "./imgLumiIcon/Lumi-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function LumiIconComponent() {
    const [lumi, setLumi] = useState(false);
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
        <div
            className="LumiIcon"
            onMouseOver={() => setLumi(true)}
            onMouseOut={() => setLumi(false)}
            onClick={() =>
                scrollToPage("/Lunna-landing-page/lumi", "dashboard")
            }
        >
            <img src={LumiIconImage} alt="Lumi" />
            {lumi && (
                <>
                    <div className="LumiIcon-overlay">
                        <p style={{ color: "#9747FF" }}>Lumi, a IA da Lunna</p>
                        <p>Como posso ajudar?</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default LumiIconComponent;
