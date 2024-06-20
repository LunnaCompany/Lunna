import React from "react";
import "./CardAviso.css";
import fotoPedagogo from "../../../assets/foto-pedagogo.png"

const CardAviso = ({data}) => {
    return (
        <div className="card-aviso" key={data.idAviso}>
            <div className="container-card-perfil-pedagogo">
                <img src={fotoPedagogo} alt="" />
                <span>Pedagoga Marta</span>
            </div>

            <div className="content-card-aviso">
                <h3>{data.tituloAviso}:</h3>
                <p>
                    {data.conteudoAviso}
                </p>
            </div>

            <div className="footer-card-aviso">
                <span>{data.importancia}</span>

                <div>
                    <label htmlFor="">Não Lido</label>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
        </div>
    );
};

export default CardAviso;
