import React from "react";
import "./cardCadastroSucess.css";
import Icon from "../../../assets/cadastro-sucess.png";

export function CardCadastroSucess() {
    return (
        <>
            <div className="card-cadastro-sucess">
                <div className="first-text">
                    <p>Parabéns! Você completou</p>
                    <p>com sucesso o seu cadastro</p>
                </div>
                <div className="card-img-cadastro">
                    <img src={Icon} />
                </div>
                <div className="second-text">
                    <p>Confirme seu endereço de e-mail</p>
                    <p>
                        <span>Ir para o meu e-mail</span>
                    </p>
                </div>
                <div className="card-btn-cadastro">Continuar</div>
            </div>
        </>
    );
}
