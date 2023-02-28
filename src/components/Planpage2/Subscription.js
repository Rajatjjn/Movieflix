import React, { useState } from "react";
import SubscriptionPlanCard from "./PlanCard";
import { plans } from "./ConstPlan";
import Nav from "../../MainPge/Nav/Nav";
import { useNavigate } from "react-router-dom";
import { isLogin } from '../../Recoil';
import { useRecoilValue } from 'recoil';

import { useEffect } from 'react';


export default function SubscriptionPlan() {
  const [data,setData] = useState(plans)


  const isUserLoggedIn = useRecoilValue(isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  });


  function handleClick(x){
    x.isSubcribe=true
    setData([...data])
    alert(`${x.planName} is successfully Subscribe!ENJOY`)
   navigate("/Home")
    
  }

  return (
    <>
    <Nav/><hr/>
    <div className="App">
      <h2>Movieflix Subscription Plans</h2>
      <div className="subscription-plan-container">
        {plans.map((plan, index) => (
          <SubscriptionPlanCard
            key={plan.id}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
            
            buttonText={plan.isSubcribe ? plan.buttonSubcribe : plan.buttonText}
            isSubcribe={plan.isSubcribe}
            OnClick={(()=>handleClick(plan))}
          />
        ))}
    
      </div>
     
    </div>
  
    </>
  );
}