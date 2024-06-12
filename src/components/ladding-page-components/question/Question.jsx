import React, { useState } from "react";
import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";
import "./style.css";

const Question = ({translateText}) => {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleShowQuestion = () => {
        setShowQuestion(!showQuestion);
    };

    return (
        <div className="box-questions">
            <div className="question">
                <h3>{translateText.titlepergunto}</h3>
                <img className={!showQuestion && "img-plus-question"} onClick={handleShowQuestion} src={showQuestion? minus : plus} alt="" />
            </div>
            {showQuestion && (
                <p>
                  {translateText.repostapergunta}
                </p>
            )}
        </div>
    );
};

export default Question;
