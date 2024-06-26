import React from "react";
import mainImage from "../../../assets/question-img.png";
import "./style.css";
import Question from "../../../components/ladding-page-components/question/Question";

const QuestionsSection = ({ translateText }) => {
   return (
      <section id="contato" className="section-questions ">
         <div className="content-section-questions">
            <img
               className="main-img-section-questions"
               src={mainImage}
               alt=""
            />

            <div className="questions-content">
               <h2>{translateText.perguntas_frequentes_txt}</h2>
               <div className="box-questions-content">
                  <Question
                     respostapergunta={translateText.respostapergunta1}
                     titlepergunto={translateText.titlepergunto1}
                  />
                   <Question
                     respostapergunta={translateText.respostapergunta2}
                     titlepergunto={translateText.titlepergunto2}
                  />
                   <Question
                     respostapergunta={translateText.respostapergunta3}
                     titlepergunto={translateText.titlepergunto3}
                  />
                   <Question
                     respostapergunta={translateText.respostapergunta4}
                     titlepergunto={translateText.titlepergunto4}
                  />
                   <Question
                     respostapergunta={translateText.respostapergunta5}
                     titlepergunto={translateText.titlepergunto5}
                  />
               </div>
            </div>
         </div>
         <div className="questions-more-infos">
            <div>
               <h2>{translateText.precisa_de_mais_informacoes_txt}</h2>
            </div>

            <div className="btn-more-infos">
               {translateText.entre_em_contato_txt}
            </div>
         </div>
      </section>
   );
};

export default QuestionsSection;
