import "./EnqueteCard.css";

function EnqueteCard(props) {
    return (
        <div className="box-pedagoga-marta">
            <div className="enquete-pedagogos">
                <div className="enquete-pedagoga-marta">
                    <img src={props.imagem}></img>
                    <p>{props.nome}</p>
                </div>

                <p>{props.datainicio}</p>
                <p>{props.datafinal}</p>
            </div>

            <div className="perguntas">
                <p>{props.pergunta}</p>
            </div>

            <div className="btn-perguntas">
            <div className={`input-perguntas-enquete ${props.colorinput}`}>
                    <label for="pergunta01">{props.opcao01}</label>
                    <input type="checkbox" />
                </div>

                <div className={`input-perguntas-enquete ${props.colorinput}`}>
                    <label for="pergunta01">{props.opcao02}</label>
                    <input type="checkbox" />
                </div>

                <div className={`input-perguntas-enquete ${props.colorinput}`}>
                    <label for="pergunta01">{props.opcao03}</label>
                    <input type="checkbox" />
                </div>

                <div className={`input-perguntas-enquete ${props.colorinput}`}>
                    <label for="pergunta01">{props.opcao04}</label>
                    <input type="checkbox" />
                </div>
            </div>
        </div>
    );
}

export default EnqueteCard;


