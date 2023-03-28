import React from "react";
import { motion as m } from "framer-motion";
import { programsData } from "../../data/programsData";
import { rightArrow } from "../../assets";
import "./programs.css";
import { transition1 } from "../../transitions";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <m.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition1}
        className="programs-header"
      >
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </m.div>

      <div className="programs-categories">
        {programsData.map((program) => (
          <m.div
            whileHover={{ scale: 1.08 }}
            transition={{ ease: "easeOut" }}
            className="category"
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="rightArrow" />
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
