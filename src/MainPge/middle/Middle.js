import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailvalidation } from '../../Helper'
import style from "./Middle.module.css"


export default function Middle() {
    const[email,setemail]=useState("")
    const[emailerror,setemailerror]=useState("")
    const[localEmail,setLocalEmail]=useState([])


    useEffect(()=>{
        if(localStorage.getItem("email")){
            let data=JSON.parse(localStorage.getItem("email"))
            setLocalEmail(data)
        }
    },[])
console.log(localEmail)

    const Navigate=useNavigate()

    function Handleemail(e){
        setemail(e.target.value)
        const validated=emailvalidation(email)
        setemailerror(validated)
    }
console.log(emailerror)
    function HandleClick(){
if(emailerror==="true" ){
    // const obj={
    //     email:email
    // }
    // localEmail.push(email)
localStorage.setItem("email",JSON.stringify(email))
alert("Register on next page")
Navigate("/register")
}else if
    (email===""){
        alert("plese fill input")
    

}else{
    alert("please enter valid credentials")
}
    }
  return (
    <>
      
       {/* <div className={style.content}>
        <h1>Unlimited movies, TV <br/>shows and more.</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <input type="email" placeholder='Email'/><button>Get started</button>
      </div>  */}
      <div className={style.content}>
        <h1>Unlimited movies, TV <br/>shows and more.</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
      
        <p className={style.p}>Ready to watch? Enter your email to create or restart your membership.</p>
       <div className={style.inp}><input className={style.inputF} type="email" value={email} placeholder='Enter your Email here......' onChange={Handleemail}/>
   
        <button className={style.button} onClick={HandleClick}>Get started</button></div> 
      <p className={style.error}>{emailerror}</p>
      </div> 
    </>
  )
}
 