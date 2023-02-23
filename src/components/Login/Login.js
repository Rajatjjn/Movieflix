import React from 'react'
import style from "./Login.module.css"
import Footer from '../footer/Footer'
import logo from "./logo.png"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isLogin } from '../../Recoil'

export default function Login() {
  let data=JSON.parse(localStorage.getItem("userDetails"))
  console.log(data,"login")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")


  const setLoginInfo=useSetRecoilState(isLogin)
 const Navigate=useNavigate()
  function HandleEmail(e){
    setemail(e.target.value)
    

  }
  function HandlePass(e){
    setpassword(e.target.value)
  }
  function HandleLogin(){
  //   if(!email==""|| !password==""){
  // Navigate("/Home")
   const match=data.filter((x)=>x.email===email && x.password===password);
   console.log(match,"matchdata")
   if (match.length>0){
    alert("successful login")
   setLoginInfo(true)
    Navigate("/Home")
   }else if(email==="" || password===""){
alert("fill input first")
   }else{
    alert("register first")
   }

   
  }
  return (
    <>
        
    <div className={style.contain}>
    <img className={style.logo} src={logo}/>
        <div className={style.main}>
      
            <h2 style={{color:"white"}}>Sign In</h2>
            <input className={style.input} type="email" placeholder='Email' onChange={HandleEmail} />
           
            <div><input className={style.password} type="password" placeholder='password' onChange={HandlePass}/></div>
          
            <div className={style.button}><button onClick={HandleLogin}>Sign up</button></div><br/>
        <div className={style.link}>
          <p>New to Netflix?<Link to="/register">SignUpNow</Link></p><br/>
          <p>This page is protected by Google <br/>reCAPTCHA to ensure you're not a bot.</p>
        </div>

        </div> 
        <Footer/>
        </div>
        
    </>
    
  )
}
