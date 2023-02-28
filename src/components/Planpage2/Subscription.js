import React, { useState } from "react";
import SubscriptionPlanCard from "./PlanCard";
import { plans } from "./ConstPlan";
import Nav from "../../MainPge/Nav/Nav";
import { useNavigate } from "react-router-dom";
import { isLogin } from '../../Recoil';
import { useRecoilValue } from 'recoil';

import { useEffect } from 'react';


export default function SubscriptionPlan() {
  
  const Navigate=useNavigate()

  const isUserLoggedIn = useRecoilValue(isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  });
  function HandleButton(index){
    
    alert("You are subscribed now!ENJOY")
Navigate("/Home")
  }
  

  return (
    <>
    <Nav/><hr/>
    <div className="App">
      <h2>Movieflix Subscription Plans</h2>
      <div className="subscription-plan-container">
        {plans.map((plan, index) => (
          <SubscriptionPlanCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
            buttonText={plan.planName}
            OnClick={(()=>HandleButton(index))}
          />
        ))}
      </div>
    </div>
    </>
  );
}