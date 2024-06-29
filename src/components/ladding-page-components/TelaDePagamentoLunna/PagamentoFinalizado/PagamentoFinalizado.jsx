import { useState } from "react";
import Agua from "../img/Agua.png";
import Finalizar from "../img/Finalizar.png";
import "./PagamentoFinalizado.css";

function App() {
   return (
      <div className="container-pagamento-finalizado">
         <div className="container-finalizado">
            <div className="finalizar-pagamento">
               <img src={Finalizar} />
               <p>Assinatura completa</p>
            </div>

            <div className="mensagem-finalizar-pagamento">
               <p>
                  Você já pode desfrutar dos seus benefícios! Entre com a sua
                  conta e faça login.
               </p>
            </div>

            <div className="button-finazilar-pagamento-pagamentofinalizado">
               <div className="roxo">Efetuar login </div>
               <div className="background-roxo">Voltar</div>
            </div>
         </div>
      </div>
   );
}

export default App;
