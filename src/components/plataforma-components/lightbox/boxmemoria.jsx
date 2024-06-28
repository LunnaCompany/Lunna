import React from 'react'
import "./lightbox.css"
import boxmemoria1 from "../../../assets/boxmemoria1.png"
import pro2 from "../../../assets/pro2.png"
import { Promptmemorias } from "./prompt-memorias/Prompt-memorias"

function Boxmemoria({handleOpen}) {
  const dataPromptmemorias = [
    {
      imgmemoria: boxmemoria1,
      fotoprofessor: pro2,
      nomepro: "Profª Marta",
      descricaomemoria: "Uma memória do seu filho, brincando com seu colega no passeio  ao parque",
      datamemoria: "21/02/2024",
      nomecrianca: "Gabriel Pereira dos Anjos"
    }
  ]



  return (
    <div>
      <div className="background" >

        {
          dataPromptmemorias.map((promptmemorias) => (
            <Promptmemorias handleOpen={handleOpen} dados={promptmemorias} />

          ))
        }
      </div>
    </div>
  )
}

export default Boxmemoria
