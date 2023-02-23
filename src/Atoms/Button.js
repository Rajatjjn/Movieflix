import React from 'react'

export default function Button({text,InputCss,onClick}) {
  return (
    <>
    <div> <button onClick={onClick} className={InputCss}>{text}</button> </div>
    
    </>
  )
}
