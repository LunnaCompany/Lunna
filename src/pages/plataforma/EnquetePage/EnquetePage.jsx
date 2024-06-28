import React from "react";
import EnqueteCard from "../../../components/plataforma-components/EnqueteCard/EnqueteCard";
import PedagogaMarta from "./img/PedagogaMarta.png";
import PedagogaLola from "./img/PedagogaLola.png";
import PedagogaBianca from "./img/PedagogaBianca.png";
import PedagogaBeatriz from "./img/PedagogaBeatriz.png";
import SecondHeaderPlataforma from "../../../components/plataforma-components/SecondHeaderPlataforma/SecondHeaderPlataforma";

const EnquetePage = () => {
    return (
        <div className="page-enquetes">
            <SecondHeaderPlataforma />
            <EnqueteCard
                nome="Pedagoga Marta"
                imagem={PedagogaMarta}
                datainicio="Hoje 12/02"
                datafinal="Até 10/04"
                pergunta="Como você prefere que a hora da soneca seja conduzida na creche?"
                opcao01="Ambiente tranquilo com música suave"
                opcao02="Uso de luzes baixas e sons relaxantes"
                opcao03="Rotina individualizada de acordo com as preferências da criança"
                opcao04="O jeito padrão está bom"
            />

            <EnqueteCard
                nome="Pedagoga Lola"
                imagem={PedagogaLola}
                datainicio="Hoje 20/03"
                datafinal="Até 20/04"
                pergunta="Como você avalia o último evento especial realizado na creche?"
                opcao01="Excelente, estão fazendo um otimo trabalho"
                opcao02="Precisa melhorar"
                opcao03="Esta bom, mas pode melhorar"
                opcao04="Ruim, decaiu bastante"
                 colorinput="color-input-blue"
                
            />

            <EnqueteCard
                nome="Pedagoga Bianca"
                imagem={PedagogaBianca}
                datainicio="Hoje 21/04"
                datafinal="Até 21/06"
                pergunta="Qual tipo de programação você gostaria de ver oferecida durante as férias escolares na creche para manter seus filhos engajados e entretidos?"
                opcao01="Atividades que ajudam o desenvolvimento criativo da criança"
                opcao02="Jogos educativos, como quebra-cabeça"
                opcao03="Plantio de flores ou vegetais e cuidados com um pequeno jardim"
                opcao04="Experimentos simples que despertem a curiosidade sobre o mundo ao redor."
                colorinput="color-input-yellow"
                
            />

            <EnqueteCard
                nome="Pedagoga Beatriz"
                imagem={PedagogaBeatriz}
                datainicio="Hoje 25/08"
                datafinal="Até 26/09"
                pergunta="Queremos aumentar nossas atividades ao ar livre na creche. Que tipo de atividades ao ar livre você gostaria que seu filho(a) participasse mais?"
                opcao01="Caça ao tesouro"
                opcao02="pintura com aquarela, ao ar livre"
                opcao03="Dança com musicas animadas"
                opcao04="Esportes adaptados para os pequenos"
                colorinput="color-input-roxo"
            />
        </div>
    );
};

export default EnquetePage;
