import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "./../../data/testimonialsData.js";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>
        <span>{testimonialsData[0]}</span>
      </div>
      <div className="right-t"></div>
    </div>
  );
};

export default Testimonials;
