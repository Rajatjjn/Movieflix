import { useState } from "react";

import "./Subscription.css";



export default function SubscriptionPlanCard({
  planName,
  price,
  features,
  buttonText,
  OnClick
}) {

  return (
    <div className="subscription-plan-card">
      <h3>{planName}</h3>
      <div className="price-container">
        <span className="currency">$</span>
        <span className="amount">{price}</span>
        <span className="period">/month</span>
      </div>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <i class="fa fa-check"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button onClick={OnClick} className="btn">{buttonText}</button>
    </div>
  );
}
