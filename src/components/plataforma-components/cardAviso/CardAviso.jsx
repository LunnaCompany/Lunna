import React from "react";
import "./CardAviso.css";
import fotoPedagogo from "../../../assets/foto-pedagogo.png"

const CardAviso = () => {
    return (
        <div className="card-aviso">
            <div className="container-card-perfil-pedagogo">
                <img src={fotoPedagogo} alt="" />
                <span>Pedagoga Marta</span>
            </div>

            <div className="content-card-aviso">
                <h3>Importância do Brincar:</h3>
                <p>
                    Queridos pais, o brincar é a linguagem natural das crianças
                    e uma ferramenta poderosa para o desenvolvimento físico,
                    cognitivo, emocional e social. Encorajamos vocês a reservar
                    tempo para brincadeiras criativas e exploratórias em casa
                </p>
            </div>

            <div className="footer-card-aviso">
                <span>Importante</span>

                <div>
                    <label htmlFor="">Não Lido</label>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
        </div>
    );
};

export default CardAviso;
