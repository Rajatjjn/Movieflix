import React from 'react'
import { TiTick } from "react-icons/ti";
import Button from '../../Atoms/Button';
import Nav from '../../MainPge/Nav/Nav';
import style from "./Plan.module.css"
import { isLogin } from '../../Recoil';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeadSection from '../HeadSection/HeadSection';

export default function Plan() {
  const isUserLoggedIn = useRecoilValue(isLogin);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isUserLoggedIn) {
        navigate("/");
      }
    });

    
  return (
    <>
    <Nav/><hr/>
{/* <HeadSection/> */}
    
      <div className={style.main} >
      <div className={style.items}>
       <h1 className={style.logo}><TiTick /></h1>
      <h3 style={{textAlign:'center'}}>Choose Your Plan</h3><br/>
      <h5><TiTick style={{color:"red"}}/>{"  "}No commitments, cancel anytime.</h5><br/>
      <h5><TiTick style={{color:"red"}} />{"  "}Everything on Movieflix for one low price.</h5><br/>
      <h5><TiTick style={{color:"red"}}/>{"  "} No ads and no extra fees. Ever.</h5><br/><br/>
     <Link to="/subscription"><Button
        InputCss={style.InputCss}
        text={"join Now"}
        
     /></Link>
      </div>
       
      </div>
    </>
  )
}
