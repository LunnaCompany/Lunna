export function ContatoEmergencia({ dados }) {
    return (
        <>
            <h2>Contatos de Emergencias:</h2>
            <ul>
                <li>
                    {" "}
                    <strong>Nome:</strong>
                    <span>{dados.nomeRelacao}</span>
                </li>
                <li>
                    {" "}
                    <strong>Grau de Parentesco:</strong> {dados.relacao}
                </li>
                <li>
                    {" "}
                    <strong>Número de Telefone:</strong> {dados.telefoneRelacao}
                </li>
            </ul>
        </>
    );
}
