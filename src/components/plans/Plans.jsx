import React from "react";
import { motion as m } from "framer-motion";
import { whiteTick } from "../../assets";
import { plansData } from "../../data/plansData";
import "./plans.css";
import { transition1 } from "../../transitions";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-r" />
      <div className="blur plans-blur-l" />
      <m.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition1}
        className="programs-header"
      >
        <span className="stroke-text">READDY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </m.div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="whiteTick" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits {"->"} </span>
            </div>
            <m.button whileHover={{ scale: 1.09 }} className="btn">
              Join Now
            </m.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
