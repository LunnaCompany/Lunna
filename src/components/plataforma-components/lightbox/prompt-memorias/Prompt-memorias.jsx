import React from 'react'
import "./Prompt-memorias.css"
import { CiCalendarDate } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

export function Promptmemorias({ dados, handleOpen }) {
    return (
        <div>
            <div className="container-lightbox">
                <div className="box-light">
                    <div className="image-memoria">
                        <img src={dados.imgmemoria} alt="" />
                    </div>
                    <div className="box-info">
                        <div className="info-pro">
                            <img src={dados.fotoprofessor} alt="" />
                            <h2>{dados.nomepro}</h2> <button onClick={handleOpen}>voltar</button>
                        </div>
                        <div className="info-memoria">
                            <p> <strong>{dados.descricaomemoria}</strong> </p>
                        </div>
                        <div className="date">
                            <CiCalendarDate size="20px" />
                            <p>{dados.datamemoria}</p>
                        </div>

                        <div className="line-name">
                            <div className="line-memoria"></div>
                            <div className="container-btn-fav-e">
                                <div className="btn-e">
                                    <button> <CiSaveDown2 size="20px" /></button>
                                    <button> <CiHeart size="20px" /> </button>
                                </div>
                            </div>
                            <div className="name-discente">
                                <p>{dados.nomecrianca}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}