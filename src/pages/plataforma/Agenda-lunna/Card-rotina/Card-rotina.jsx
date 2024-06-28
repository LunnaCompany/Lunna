import React from 'react'
import "./Card-rotina.css"
export function Cardrotina({ dados }) {
    return (
        <div>
            <div className={`container-card-rotina-agenda ${dados.colorcardrotina}`}>
                <div className= {`line-card-rotina ${dados.linecardrotina}`}></div>
                <div className="rotina-text-tela-agenda">
                    <div className="horario-rotina-imh-prof-tela-agenda">
                        <p>{dados.horario}</p>
                        <img src={dados.fotopqn} alt="" />
                    </div>
                    <div className="section-text-atv-tela-agenda">
                        <p> <strong>{dados.atividade}</strong></p>
                        <p>{dados.descriatv}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
