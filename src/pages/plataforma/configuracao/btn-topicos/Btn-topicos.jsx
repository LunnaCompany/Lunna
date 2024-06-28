import React from 'react'
import "./style.css"
import { FaChevronRight } from "react-icons/fa6";
export function Btntopicos({dados}) {
  return (
    <div>
      <div className="container-topicos-principais">
        <div className="title-topicos-principais">{dados.topicos}    </div>
        <div className="chevron-topicos">
        <FaChevronRight  className='chevron-topicos-btn' size={25}/>
        </div>
      </div>
    </div>
  )
}
