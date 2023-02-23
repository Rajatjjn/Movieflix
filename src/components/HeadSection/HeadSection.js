import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import Button from '../../Atoms/Button'
import { isLogin } from '../../Recoil'
import "./HeadSection.css"

export default function HeadSection() {
  const[show,setshow]=useState(false);

  useEffect(()=>{
window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
    setshow(true);
  }else setshow(false)
});
// return ()=>{
//   window.removeEventListener("scroll");
// }
  },[]);

  let data=JSON.parse(localStorage.getItem("userDetails"))
  console.log(data[data.length-1].name)
  let call=data[data.length-1].name

  const setLoginInfo=useSetRecoilState(isLogin)
  const Navigate=useNavigate()

  function HandleLogout(){
    let text="Do you want to logout"
    if(window.confirm(text)==true){
      setLoginInfo(false);
      Navigate("/login")
      alert("successfully logout")
    
    } else{
      text="cancel"
    }
  }


  return (
    <>
      <div className={`headsection ${show && "navv"}`}>

<img className="nav_logoo"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
<ul>
           <li><h3 >Welcome{" "}{call}{" "}</h3></li>
          <li><Button text={"SignOut"}
              onClick={HandleLogout}
              InputCss={"buttonn"}
            />
  </li> 
</ul>
        
      </div>

    </>
  )
}
