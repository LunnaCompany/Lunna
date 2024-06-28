import React from 'react'
import "./button-tela-config.css"

export function Btntelaconfig() {
  return (
    <div>
      <div className="section-btn-one-ativado-desativado-tela-config">
        <div className="btn-one-ativado-desativado-tela-config"><strong>Ativado</strong></div>
        <div className="btn-tela-configuration">
        <button><strong>desativado</strong></button>
        </div>
      </div>
    </div>
  )
}
