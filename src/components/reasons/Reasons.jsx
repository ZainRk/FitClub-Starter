import React from "react";
import "./reasons.css";
import {
  image1,
  image2,
  image3,
  image4,
  nb,
  adidas,
  nike,
  tick,
} from "../../assets";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="fitness_man_01" />
        <img src={image2} alt="fitness_man_02" />
        <img src={image3} alt="fitness_man_03" />
        <img src={image4} alt="fitness_man_04" />
      </div>

      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 140+ EXPERT COACH</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAT BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MENBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
