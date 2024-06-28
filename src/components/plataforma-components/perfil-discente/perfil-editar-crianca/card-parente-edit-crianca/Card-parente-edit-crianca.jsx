import React from 'react'
import "./Card-parente-edit-crianca.css"
export function Cardparenteedit({ dados }) {
    return (
        <div>
            <div className="section-btn-retirar-edit-parente">
                <p className='text-retirar-edit-crianca' >Retirar</p>
                <button className='btn-retirar-edit-parente'> <strong> - </strong> </button>
            </div>
            <div className="container-parentes-edit-crianca">
                <div className="img-parente-edit-crianca">
                    <img src={dados.parente} alt="" />
                </div>
                <div className="info-parente-edit-crianca">
                    <ul>
                        <li><strong>Nome: </strong>{dados.nome}</li>
                        <li> <strong>RG: </strong>{dados.RGparente}</li>
                        <li><strong>CPF: </strong>{dados.CPFparente}</li>
                        <li><strong>Grau de parentesco: </strong>{dados.Grau}</li>
                        <li><strong>Contato: </strong>{dados.Contato}</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )

}
