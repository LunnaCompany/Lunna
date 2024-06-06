import React from "react";
import "./Baby.css";
import BabySleep from "./img/baby_login.png";
import BackTo from "./img/backto.png";
export default function Baby() {
   return (
      <>
         <div className="conteiner-baby">
            <div className="imgBackTo">
               <img src={BackTo} className="imgBackTo" />
            </div>
            <div className="text">
               <h2>Olá! É bom vê-los novamente aqui Pais.</h2>
            </div>
            <div className="Baby">
               <img src={BabySleep} />
            </div>
         </div>
      </>
   );
}
