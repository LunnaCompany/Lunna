import React from "react";
import "./Input.css";

export default function Input({
    iconImg,
    placeholder,
    register,
    nameCampo,
    errors,
}) {
    return (
        <>
            <div className="input">
                <div className="input-email-container">
                    <input
                        type="email"
                        placeholder={placeholder}
                        {...register(nameCampo, {
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            },
                        })}
                    ></input>
                    <img src={iconImg} alt="" />
                </div>
                <div className="">
                    {errors?.emailLogin?.type === "required" && (
                        <p className="error-message-input">
                            O email é obrigatorio
                        </p>
                    )}
                    {errors?.pattern?.type === "required" && (
                        <p className="error-message-input">Email invalido</p>
                    )}
                </div>
            </div>
        </>
    );
}
