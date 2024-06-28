import React from "react";
import { useState } from "react";
import "./Card.css";
import Overlay from "./Overlay";
//
import IconUm from "./Icons/icon-um.png";
import IconDois from "./Icons/icon-dois.png";
import IconTres from "./Icons/icon-tres.png";
import IconQuatro from "./Icons/icon-quatro.png";
import IconCinco from "./Icons/icon-cinco.png";
//
import IconBig1 from "./img/icon1.png";
import IconBig2 from "./img/icon2.png";
import IconBig3 from "./img/icon3.png";
import IconBig4 from "./img/icon4.png";
import IconBig5 from "./img/icon5.png";
import Background from "./img/background.png";
//
export default function Card(props) {
   //
   const [dataCard, setDataCard] = useState();
   const [overlay, setOverlay] = useState(false);
   //
   function handleOverlay() {
      setOverlay(!overlay);
   }
   const data = [
      {
         img: IconBig1,
         titulo: "Coordenação Motora",
         descricao:
            "Com essa atividade, Gabriel conseguiu melhorar sua coordenação motora. Ao seguir os passos da dança, ele praticou movimentos coordenados, aprendendo a sincronizar mãos e pés de maneira harmoniosa.",
         color: "purple-card",
      },
      {
         img: IconBig3,
         titulo: "Autoestima",
         descricao:
            "Com cada passo bem executado, Gabriel mostrou um crescimento na autoestima. Ele ficou visivelmente mais confiante em suas habilidades, aproveitando o reconhecimento e a validação de seus amigos e professores.",
         color: "pink-card",
      },
      {
         img: IconBig5,
         titulo: "Autoconfiança",
         descricao:
            "A prática repetida dos passos de dança ajudou Gabriel a desenvolver autoconfiança. Cada movimento realizado com sucesso aumentou sua confiança, fazendo-o sentir-se mais seguro e capaz de enfrentar novos desafios.",
         color: "pinkWhite-card",
      },
      {
         img: IconBig4,
         titulo: "Criatividade de Expressão",
         descricao:
            "Gabriel teve a oportunidade de explorar sua criatividade durante a dança. Ele inventou novos movimentos e expressou suas emoções através do corpo, mostrando um aumento significativo em sua capacidade de se expressar de forma única.",
         color: "blue-card",
      },
      {
         img: IconBig2,
         titulo: "Conhecendo Ritmo das Músicas",
         descricao:
            "Durante a atividade, Gabriel começou a perceber e seguir o ritmo das músicas. Ele desenvolveu a habilidade de identificar diferentes batidas e sincronizar seus movimentos com elas, tornando-se mais consciente dos padrões rítmicos.",
         color: "yellow-card",
      },
   ];
   function handleCard(index) {
      setDataCard(data[index]);
      setOverlay(true);
   }

   //
   return (
      <>
         <div className="AtividadesRecreativas-Card">
            <div className="AtividadesRecreativas-Background">
               <p>Atividade do dia: 23/05</p>
            </div>
            <h3 id="AtividadesRecreativas-H3">Musica e Dança</h3>

            <div className="AtividadesRecreativas-Others">
               <p id="AtividadesRecreativas-Descricao">
                  Durante a aula de dança, fiquei impressionado com sua
                  capacidade de aprender rapidamente os passos e se mover com
                  graça e confiança. Sua energia contagiante e vontade de se
                  expressar através da dança são verdadeiramente admiráveis.
               </p>
               <p>Pontos desenvolvidos</p>
            </div>
            <div className="AtividadesRecreativas-Icones">
               <img
                  src={IconUm}
                  onClick={() => {
                     handleCard(0);
                  }}
                  alt="Imagem"
               />
               <img
                  src={IconDois}
                  onClick={() => {
                     handleCard(1);
                  }}
                  alt="Imagem"
               />
               <img
                  src={IconTres}
                  onClick={() => {
                     handleCard(2);
                  }}
                  alt="Imagem"
               />
               <img
                  src={IconQuatro}
                  onClick={() => {
                     handleCard(3);
                  }}
                  alt="Imagem"
               />
               <img
                  src={IconCinco}
                  onClick={() => {
                     handleCard(4);
                  }}
                  alt="Imagem"
               />
            </div>
         </div>
         {overlay && (
            <Overlay
               data={dataCard}
               handleOverlay={handleOverlay}
               titulo="Lorem ipsium"
               descricao={data.descricao}
            />
         )}
      </>
   );
}
