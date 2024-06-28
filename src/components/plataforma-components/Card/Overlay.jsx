import React from "react";
import "./Overlay.css";
import { IoChevronBackCircle } from "react-icons/io5";

//
export default function Overlay(props) {
   return (
      <>
         <div className="overlay-ativity">
            <div className="description-ativity">
               <div className={props.data.color}>
                  <div className="conteiner-icon">
                     <IoChevronBackCircle
                        onClick={props.handleOverlay}
                        className="back-icon"
                        size={40} 
                     />
                  </div>
                  <div className="conteiner-img">
                     <img src={props.data.img} />
                     <p></p>
                  </div>
               </div>
               <div className="conteiner-bottom">
                  <div className="conteiner-text">
                     <h1>{props.data.titulo}</h1>
                  </div>
                  <div className="conteiner-description">
                     <p>{props.data.descricao}</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
