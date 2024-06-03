import React, { useState } from "react";
import "./StepControll.css";
import done from "../../assets/Done.png";

const StepControll = ({ step }) => {
    const [stepSelect, setStepSelect] = useState(1);
    const handleStepSelct = () => {};

    return (
        <div className="step-control-container">
            {step === 1 ? (
                <h2>Dados do Responsável</h2>
            ) : step === 2 ? (
                <h2>Dados da Criança</h2>
            ) : step === 3 ? (
                <h2>Dados da Medicos</h2>
            ) : (
                <h2></h2>
            )}

            <div className="step-control">
                <div
                    onClick={() => setStepSelect(1)}
                    className={`${step > 1 ? "step-concluido" : ""} ${
                        step === 1 ? "step-select" : "step"
                    }`}
                >
                    {step == 1 ? <span>1</span> : <img src={done}></img>}
                </div>
                <div className="line-step"></div>
                <div
                    onClick={() => setStepSelect(2)}
                    className={`${step > 2 ? "step-concluido" : ""} ${
                        step === 2 ? "step-select" : "step"
                    }`}
                >
                    {step <= 2 ? <span>2</span> : <img src={done}></img>}
                </div>
                <div className="line-step"></div>
                <div
                    onClick={() => setStepSelect(3)}
                    className={`${step > 3 ? "step-concluido" : ""} ${
                        step === 3 ? "step-select" : "step"
                    }`}
                >
                    {step <= 3 ? <span>3</span> : <img src={done}></img>}
                </div>
            </div>
        </div>
    );
};

export default StepControll;
