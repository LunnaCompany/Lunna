import "./BtnSessao.css"
import { FaUserCircle } from "react-icons/fa";
import { BsWindows } from "react-icons/bs";
export function BtnSessao({ dados }) {
    return (
        <div>
            <div className="container-sessao-alternativa-tela-config">
                <div className="section-sessao-alter-tela-config">
                    <div className="user-tela-config"><FaUserCircle size={40} color='#fff' /></div>
                    <div className="info-user-alternativa-tela-config">
                        <h4>Windows <BsWindows size={20} /></h4>
                        <p>{dados.descricao_sessao}</p>
                    </div>
                    <div className="btn-sair-sessao-tela-config">
                        <button>Sair</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


