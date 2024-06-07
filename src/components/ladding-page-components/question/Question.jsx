import React, { useState } from "react";
import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";
import "./style.css";

const Question = () => {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleShowQuestion = () => {
        setShowQuestion(!showQuestion);
    };

    return (
        <div className="box-questions">
            <div className="question">
                <h3>Lorem ipsum dolar sit amet consectetur</h3>
                <img className={!showQuestion && "img-plus-question"} onClick={handleShowQuestion} src={showQuestion? minus : plus} alt="" />
            </div>
            {showQuestion && (
                <p>
                    Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis
                    in at sodales condimentum. Gravida arcu aliquet rutrum erat
                    varius. Tellus felis sed pretium in egestas.
                </p>
            )}
        </div>
    );
};

export default Question;
