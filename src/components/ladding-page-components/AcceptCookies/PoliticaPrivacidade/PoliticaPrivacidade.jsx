import React from "react";
import "./PoliticaPrivacidade.css";
import { LuX } from "react-icons/lu";

export default function PoliticaPrivacidade({
   setModelPoliticaPrivacidade,
   modelPoliticaPrivacidade,
}) {
   return (
      <div className="background-politica-privacidade">
         <div className="politica-privacidade">
            <div className="politica-privacidade-icon-title">
               <h1>Políticas de Privacidade</h1>
               <LuX
                  size={40}
                  className="politica-privacidade-icon-return"
                  onClick={() => setModelPoliticaPrivacidade(false)}
               />
            </div>
            <div className="politica-privacidade-conteudo">
               <h4>Política de Privacidade da Lunna</h4>
               <p>
                  A plataforma Lunna está comprometida com a privacidade e
                  segurança dos dados pessoais dos seus usuários. Esta política
                  de privacidade descreve como coletamos, usamos, compartilhamos
                  e protegemos as informações fornecidas pelos pais, pedagogos e
                  instituições de ensino que utilizam nossos serviços.
               </p>
               <div className="politica-privacidade-list">
                  <h1>1.1 Informações Coletadas</h1>
                  <ul>
                     <li>Nome completo</li>
                     <li>Endereço de e-mail</li>
                     <li>Número de telefone</li>
                     <li>
                        Dados dos filhos (nome, data de nascimento, atividades
                        diárias)
                     </li>
                     <li>Informações de logun (nome de usuário e senha)</li>
                  </ul>
                  <h1>1.2 Informações dos Pedagogos</h1>
                  <ul>
                     <li>Nome completo</li>
                     <li>Endereço de e-mail</li>
                     <li>Número de telefone</li>
                     <li>
                        Dados dos filhos (nome, data de nascimento, atividades
                        diárias)
                     </li>
                     <li>Informações de login (nome de usuário e senha)</li>
                  </ul>
                  <h1>1.3 Informações da Instituição de Ensino</h1>
                  <ul>
                     <li>Nome da instituição</li>
                     <li>Endereço</li>
                     <li>Contato telefônico</li>
                     <li>Informações sobre os alunos e turmas</li>
                  </ul>
                  <h1>2. Uso das Informações</h1>
                  <ul>
                     <h3>Utilizamos as informações coletadas para</h3>
                     <li>Facilitar a comunicação entre pais e pedagogos</li>
                     <li>Monitorar e relatar o desenvolvimento das crianças</li>
                     <li>Enviar notificações e atualizações importantes</li>
                     <li>
                        Melhorar e personalizar a experiência do usuário na
                        plataforma
                     </li>
                     <li>
                        Realizar análises e pesquisas para aprimorar nossos
                        serviços
                     </li>
                  </ul>
                  <h1>3. Compartilhamento de Informações</h1>
                  <ul>
                     <h3>
                        A Lunna não compartilha informações pessoais com
                        terceiros, exceto nas seguintes situações:
                     </h3>
                     <li>Com a permissão explícita dos usuários</li>
                     <li>Para cumprir obrigações legais ou regulatórias</li>
                     <li>
                        Com provedores de serviços que auxiliam na operação da
                        plataforma, desde que estes sigam as mesmas obrigações
                        de privacidade
                     </li>
                  </ul>
                  <h1>4. Segurança das Informações</h1>
                  <ul>
                     <h3>
                        Implementamos medidas de segurança adequadas para
                        proteger os dados pessoais dos usuários contra acesso
                        nao autorizado, alteraçao, divulgaçao ou destruição.
                        Estas medidas incluem:
                     </h3>
                     <li>Com a permissão explícita dos usuários</li>
                     <li>Para cumprir obrigações legais ou regulatórias</li>
                     <li>
                        Com provedores de serviços que auxiliam na operaçao da
                        plataforma, desde que estes sigam as mesmas obrigações
                        de privacidade
                     </li>
                  </ul>
                  <h1>5. Direitos dos Usuários</h1>
                  <ul>
                     <h3>Os usuários têm o direito de:</h3>
                     <li>
                        Acessar suas informações pessoais armazenadas na
                        plataforma.
                     </li>
                     <li>Corrigir dados pessoais incorretos ou incompletos.</li>
                     <li>
                        Solicitar a exclusão de suas informações pessoais,
                        exceto quando houver necessidade de retenção para
                        cumprimento de obrigações legais.
                     </li>
                     <li>
                        Retirar o consentimento para o uso dos dados a qualquer
                        momento.
                     </li>
                  </ul>
                  <h1>6. Cookies e Tecnologias Semelhantes</h1>
                  <ul>
                     <li>
                        Utilizamos cookies e tecnologias semelhantes para
                        melhorar a experiência do usuário na plataforma Lunna,
                        personalizar conteúdo e anúncios, e analisar nosso
                        tráfego. Os usuários podem configurar seus navegadores
                        para recusar cookies, mas isso pode afetar a
                        funcionalidade da plataforma.
                     </li>
                  </ul>
                  <h1>7. Alterações na Política de Privacidade</h1>
                  <ul>
                     <li>
                        A Lunna pode atualizar esta política de privacidade
                        periodicamente. Notificaremos os usuários sobre
                        quaisquer alterações significativas através de e-mail ou
                        de avisos na plataforma.
                     </li>
                  </ul>
                  <h1>8. Contato</h1>
                  <ul>
                     <h3>
                        Para dúvidas ou solicitações relacionadas à privacidade,
                        os usuários podem entrar em contato conosco através do
                        e-mail endereço de e-mail de suporte. A Lunna oferece
                        uma série de benefícios, incluindo:
                     </h3>
                     <li>Comunicação eficiente entre pais e pedagogos.</li>
                     <li>
                        Acompanhamento detalhado do desenvolvimento das
                        crianças.
                     </li>
                     <li>Relatórios e notificações em tempo real.</li>
                     <li>Plataforma amigável e segura.</li>
                     <p>
                        Ao utilizar a plataforma Lunna, os usuários concordam
                        com esta política de privacidade e autorizam a coleta,
                        uso e compartilhamento de suas informações conforme
                        descrito.
                     </p>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
