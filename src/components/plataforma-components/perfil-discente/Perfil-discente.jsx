import React, { useEffect } from 'react'
import "./Perfil-discente.css"
import fotocri from "../../../assets/fotocrianca.png";
import { FaPen } from "react-icons/fa";
import parente1 from "../../../assets/parente1.png"
import parente2 from "../../../assets/Parente2.png"
import parente3 from "../../../assets/Parente3.png"
import parente4 from "../../../assets/Parente4.png"
import { Cardresponsavel } from "./card-responsalvel/Card-responsavel"
function PerfilDiscente() {
    useEffect(() => {
        const fetchData = async () => {
            
        }
    }, [])
    const dataCardresponsavel = [

        {
            parente: parente1,
            nome: "Rute Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Avó",
            Contato: "(11) 99999-9999"
        },
        {
            parente: parente2,
            nome: "Douglas Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Tio",
            Contato: "(11) 99999-9999"
        },

        {
            parente: parente3,
            nome: "João Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Avô",
            Contato: "(11) 99999-9999"
        },

        {
            parente: parente4,
            nome: "Douglas Silva de Souza",
            RGparente: "54.887.564-8",
            CPFparente: "486.526.854-87",
            Grau: "Tio",
            Contato: "(11) 99999-9999"
        },

    ]
    return (
        <div id='perfil' className='div-tudo'>
            <div className="info-cri">

                <div className="info-cri-dois">
                    <div className="foto-perfil-discente">
                        <img src={fotocri} alt="" />
                    </div>



                    <div className="info-kids">
                        <h2>Gabriel Pereira Dos Anjos</h2>
                        <ul>
                            <li> <strong>Nome da Creche: </strong> Jardim da Infância Alegria</li>
                            <li> <strong>Data de nascimento: </strong> 04/05/2020</li>
                        </ul>
                    </div>


                    <div className="info-kids-two">
                        <ul>
                            <li><strong>Idade:</strong> 04</li>
                            <li> <strong> Altura: </strong> 98 cm</li>
                            <li> <strong>Peso:</strong>  16 kg</li>
                        </ul>
                    </div>


                    <div className="btn-edit">
                        <button className='btn-edit'>
                            <FaPen size={20} />
                        </button>
                    </div>

                </div>

                <div className="line"></div>


                <div className="info-med">
                    <div className="info-meio">
                        <div className="info-sus">
                            <ul>
                                <li> <strong>Carteirinha SUS:</strong> 12345678910112</li>
                                <li> <strong>Plano de Saúde:</strong> Saude Total</li>
                                <li> <strong>Tipo sanguínio:</strong> A+</li>
                            </ul>
                            <div className="info-med-med">
                                <ul>
                                    <li> <strong> PCD:</strong> Sim</li>
                                    <li> <strong> Tipo:</strong> TDHA</li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="info-contact">
                            <h2>Contatos de emergências:</h2>
                            <ul>
                                <li> <strong>Nome:</strong> Marcos dos Anjos</li>
                                <li> <strong>Relação com a criança:</strong> Pai</li>
                                <li> <strong>Número de Telefone:</strong> (11) 98765-4321</li>
                            </ul>
                            <h2>Contatos de emergências:</h2>
                            <ul>
                                <li> <strong>Nome:</strong> Marcos dos Anjos</li>
                                <li> <strong>Relação com a criança:</strong> Pai</li>
                                <li> <strong>Número de Telefone:</strong> (11) 98765-4321</li>
                            </ul>
                            <h2>Contatos de emergências:</h2>
                            <ul>
                                <li> <strong>Nome:</strong> Marcos dos Anjos</li>
                                <li> <strong>Relação com a criança:</strong> Pai</li>
                                <li> <strong>Número de Telefone:</strong> (11) 98765-4321</li>
                            </ul>
                        </div>
                    </div>
                    <div className="line-two"></div>

                    <div className="info-total">
                        <h2>Contatos de emergências:</h2>
                        <ul>
                            <li> <strong> Endereço do hospital mais próximo:</strong> Av. julio preste</li>
                            <li> <strong> Realiza algum tratamento médico:</strong> Não</li>
                            <li> <strong> Comidas Alergênicas:</strong> Gabriel é alérgico a amendoim e frutos do mar.</li>
                            <li> <strong> Medicamentos que Toma:</strong> Gabriel toma ocasionalmente paracetamol para febre.</li>
                            <li> <strong> Cuidados específicos:</strong> Nenhum</li>
                            <li> <strong>Medicamentos que Toma:</strong> Soluções salina</li>
                            <li> <strong>Em quantas horas:</strong> de 2 gotas ou jatos em cada narina</li>
                            <li> <strong>Quantidade:</strong> 2 a 3 vezes ao dia</li>
                        </ul>
                    </div>
                </div>
                <div className="line-tree"></div>
                <div className="section-parentes">
                    <div className="title-parentes">
                        <h2>Quem pode buscar meu filho na creche</h2>
                    </div>
                    <div className="parentes-section">
                        {
                            dataCardresponsavel.map((cardresponsavel) => (
                                <Cardresponsavel dados={cardresponsavel} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PerfilDiscente
