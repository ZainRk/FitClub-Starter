import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span>Ready to Start</span>
        <span className="stroke-text">your journey</span>
        <span>with us</span>
      </div>

      {/* Plans Card */}

      <div className="plans" id="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More Benifits -></span>
            </div>
            <button className="btn">
                Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
