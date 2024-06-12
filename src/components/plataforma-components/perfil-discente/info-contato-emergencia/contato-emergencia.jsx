export function ContatoEmergencia({ dados }) {
    return (
        <>
            <h2>Contatos de emergências:</h2>
            <ul>
                <li>
                    {" "}
                    <strong>Nome:</strong>
                    <span>{dados.nomeRelacao}</span>
                </li>
                <li>
                    {" "}
                    <strong>Relação com a criança:</strong> {dados.relacao}
                </li>
                <li>
                    {" "}
                    <strong>Número de Telefone:</strong> {dados.telefoneRelacao}
                </li>
            </ul>
        </>
    );
}
