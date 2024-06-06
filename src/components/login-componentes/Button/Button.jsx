import React from 'react'
import "./Button.css"

export default function Button({nomeBtn, handleSubmit, onSubmit}) {
  return (
    <>
    <button onClick={() => handleSubmit(onSubmit)()}>
        {nomeBtn}
    </button>
    </>
  )
}
