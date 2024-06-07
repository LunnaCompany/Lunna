import React from "react";
import "./AtividadesRecreativas.css";
import Icon1 from "./Icons/icon1.png";
import Icon2 from "./Icons/icon2.png";
export default function AtividadesRecreativas() {
   return (
      <>
         <div className="conteiner espacamento">
            <div className="icon-one">
               <img src={Icon1} />
            </div>
            <div className="text">
               <h1>Atividades recreativas</h1>
            </div> 
            <div className="icon-two">
               <img src={Icon2} />
            </div>
         </div>
      </>
   );
}
