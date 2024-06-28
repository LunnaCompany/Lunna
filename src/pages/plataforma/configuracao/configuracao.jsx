import React from 'react'
import "./configuracao.css"
import { FaGears } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

import { Btntelaconfig } from "../../../components/plataforma-components/btn-tela-config/button-tela-config"
import { FaChevronRight } from "react-icons/fa6";
import { Btntopicos } from './btn-topicos/Btn-topicos';
import Brasil from "../../../assets/brasil.png";
import { FaCaretDown } from "react-icons/fa";
import { BtnSessao } from './btn-alter-sessao/BtnSessao';

export function Configuracao() {
    const dataBtntopicos = [
        {
            topicos: "Como criar uma nova conta",
        },

        {
            topicos: "Como configurar seu perfil"
        },

        {
            topicos: "Recuperação de senha"
        },

        {
            topicos: "Políticas de privacidade"
        },
    ]

    const dataBtnSessao = [
        {
            descricao_sessao:"São Paulo, SP, Brazil  às 20:26 do dia 11 de setembro de 2022"
        },

        {
            descricao_sessao:"São Paulo, SP, Brazil  às 20:26 do dia 11 de setembro de 2022"
        },

        
        {
            descricao_sessao:"São Paulo, SP, Brazil  às 20:26 do dia 11 de setembro de 2022"
        },
    ]

    return (
        <div>
            <div className="tela-config">
                <div className="section-tela-configuracao">
                    <div className="container-configuracao-tela">
                        <h2>Configurações</h2>
                    </div>
                    <div className="section-img-container-configuracao-icone">
                        <div className="container-img-icone-configuracao">
                            <FaGears size={90} color='#fff' />
                        </div>
                    </div>
                </div>
                <div className="scroll-tela-config">
                    <div className="info-tela-de-configurcao">
                        <div className="email-tela-configuracao">
                            <ul>
                                <li> <strong>E-mail:</strong> Laura123@gmail.com</li>
                                <div className="btn-alterar-email-tela-config">Alterar e-mail associado à conta</div>
                                <li>Verificação de e-mail (enviar e-mail de confirmação)</li>
                                <div className="btn-verificar-email-tela-config">Solicitar verificação</div>
                            </ul>
                        </div>

                        <div className="id-mae-tela-configuracao">
                            <ul>
                                <li>ID: Mãe do Gabriel</li>
                                <div className="section-btn-id-verificar-config">
                                    <div className="btn-editar-id-tela-config">Editar ID de usuario </div>
                                    <div className="btn-verificar-dispo-config">Verificar disponibilidade</div>
                                </div>
                                <div className="senha-info-tela-config">
                                <li><strong>Senha:</strong>**************</li>
                                </div>
                                <div className="btn-aterar-senha-tela-config">Alterar senha </div>
                            </ul>
                        </div>
                    </div>
                    <div className="section-line-one-tela-config">
                        <div className="line-one-tela-config"></div>
                    </div>

                    <div className="section-preferencia-configurar-tela-config">
                        <div className="notificacao-btn-ativado-tela-config">
                            <h2>Preferências de Notificação</h2>
                            <div className="title-btn-tela-config">
                                <p>Notificações por E-mail: </p>
                                < Btntelaconfig />
                            </div>

                        </div>
                        <div className="config-som-btn-ativado-tela-config">
                            <h2>Configurar sons de notificação</h2>
                            <div className="title-banner-btn-tela-config">
                                <p>Banners e pop-ups:</p>
                                < Btntelaconfig />
                            </div>
                        </div>
                    </div>
                    <div className="section-line-one-tela-config">
                        <div className="line-one-tela-config"></div>
                    </div>

                    <div className="container-seguranca-tela-configuracao">
                        <div className="section-info-segurancca-tela-config">
                            <div className="section-autenticacao-tela-config">
                                <h2>Segurança</h2>
                                <div className="title-autentic-btn-tela-config">
                                    <p>Auteticação de dois fatores </p>
                                    < Btntelaconfig />
                                </div>
                                <h3><strong>Configurar métodos 2FA: </strong></h3>
                                <div className="sms-autentic-tela-config">
                                    <p><Checkbox />SMS </p>
                                    <p><Checkbox />Aplicativo autenticador</p>
                                </div>
                                <h3><strong>Notificar em caso de login suspeito:</strong></h3>
                                < Btntelaconfig />
                            </div>
                            <div className="section-sessao-alternativa-tela-config">
                                <h3><strong>Visualizar sessões alternativas:</strong></h3>
                                
                                {dataBtnSessao.map((btnSessao) => (
                                        <BtnSessao dados={btnSessao} />
                                    ))}
                                
                            </div>
                        </div>
                    </div>

                    <div className="section-line-one-tela-config">
                        <div className="line-one-tela-config"></div>
                    </div>

                    <div className="container-acessibilidade-tela-config">
                        <div className="section-acessibilidade-tela-config">
                            <div className="acessibilidade-info-tela-config">
                                <h2>Acessibilidade</h2>
                                <div className="idioma-btn-acessibi-tela-config">
                                    <h3>Idioma:</h3>
                                    <div className="containet-btn-idioma-tela-config">
                                        <div className="section-btn-idioma-tela-config">
                                            <img src={Brasil} />
                                            <p><strong>Português</strong> </p>
                                            <FaCaretDown size={30} />
                                        </div>
                                    </div>
                                </div>
                                <h2>Ajustar tamanho da fonte</h2>
                                <div className="tamanho-font-tela-config">
                                    <p>Pequeno</p>
                                    <p><strong>Médio</strong></p>
                                    <p>Grande</p>
                                    <p>Extra Grande</p>
                                </div>
                                <Box sx={{ width: 300 }}>
                                    <Slider defaultValue={36} />
                                </Box>
                                <h2>Contraste</h2>
                                <Box sx={{ width: 300 }}>
                                    <Slider defaultValue={60} />
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div className="section-line-one-tela-config">
                        <div className="line-one-tela-config"></div>
                    </div>

                    <div className="container-suporte-ajuda-tela-config">
                        <div className="section-suporte-ajuda-tela-config">
                            <div className="suporte-ajuda-tela-config">
                                <h2>Suporte e ajuda</h2>
                                <h4>Central de ajuda:</h4>
                                <div className="container-btn-relatar-problema-tela-config">
                                    <button>Relatar problema <FaChevronRight size={25} /></button>
                                </div>
                                <h4>Como podemos ajudar?</h4>
                                <form class="form">
                                    <button>
                                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <input class="input-configuration-page" placeholder="Pesquisar" required="" type="text" />
                                    <button class="reset" type="reset">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </form>

                            </div>

                            <div className="topicos-destaque-tela-config">
                                <h2>Tópicos em destaque</h2>
                                <div className="section-btn-topico-destaque-tela-configuracao">
                                    {dataBtntopicos.map((btntopicos) => (
                                        <Btntopicos dados={btntopicos} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-line-one-tela-config">
                        <div className="line-one-tela-config"></div>
                    </div>
                    <div className="container-conta-deletar-tela-config">
                        <div className="section-conta-info-tela-config">
                            <h2>Conta</h2>
                            <div className="section-delatar-conta-tela-config">
                                <h4>Deletar conta: </h4>
                                <button className='btn-deletar-conta'>Deletar</button>
                            </div>
                            <div className="section-deletar-conta-tela-config">
                                <h4>Sair da conta: </h4>
                                <button className='btn-sair-conta'>Sair</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
