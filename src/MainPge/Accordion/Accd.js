import React, { useState } from 'react'
import style from "./Accordian.module.css"

export default function Accd({ title, content }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={style.item}>

      <div className={style.title} onClick={() => setIsActive(!isActive)}>
        <div><h2>{title}</h2></div>
        <div> {isActive ? "x" : "+"}</div>
      </div>
      {/* // if isActive is true then show content */}
      {isActive && <div className={style.ActiveItem}>{content}</div>}

    </div>
  )
}
