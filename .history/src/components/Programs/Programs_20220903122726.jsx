import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program)=> (
        <div className="category">
        <div/>
        ))}
        </div>
        F</div>
  );
};

export default Programs;
