import "./Card-responsavel.css"
export function Cardresponsavel({ dados }) {
    return (
        <div>
            <div className="container-parentes">
                <div className="img-parente">
                    <img src={dados.parente} alt="" />
                </div>
                <div className="info-parente">
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

