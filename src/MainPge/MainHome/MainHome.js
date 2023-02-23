import React from 'react'
import Middle from '../middle/Middle'
import Nav from '../Nav/Nav'

import Accordian from '../Accordion/Accordian'
import Footer from '../../components/footer/Footer'
import style from "./MainHome.module.css"







export default function MainHome() {
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    <div className={style.di}>
     <Nav/>
    <Middle/>
    
  </div>
 <Accordian/>
 <hr/>
<Footer/>
    
    </div>
     
    </>
  )
}
