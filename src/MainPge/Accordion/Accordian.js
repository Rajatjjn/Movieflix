import React from 'react'
import style from "./Accordian.module.css";
import { Data } from './ConstData';
import Accd from './Accd';

export default function Accordian() {

  return (
    <>
      <div className={style.parent}>
        <h1 className={style.head}>Frequently Asked Question</h1>
      <div className={style.block}>
        {Data.map(({title,content})=>(

            <Accd title={title} content={content}/>
        )

        )}
      </div>
        
      </div>
    </>
  )
}
