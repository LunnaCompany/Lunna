import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import "./style.css";

const Question = ({ respostapergunta, titlepergunto }) => {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleShowQuestion = () => {
        setShowQuestion(!showQuestion);
    };

    return (
        <div className="box-questions">
            <div className="question">
                <h3>{titlepergunto}</h3>
                <LuPlus
                    style={{ strokeWidth: 2.5, cursor: "pointer" }}
                    color={"#9747FF"}
                    className="LuPlus-Icon"
                    onClick={handleShowQuestion}
                    size={20}
                />
            </div>
            {showQuestion && <p>{respostapergunta}</p>}
        </div>
    );
};

export default Question;
