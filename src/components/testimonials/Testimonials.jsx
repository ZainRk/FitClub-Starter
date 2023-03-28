import { useState } from "react";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { leftArrow, rightArrow } from "../../assets";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span>{testimonialsData[selected].name}</span> -{" "}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <m.div
          initial={{ x: "-20%" }}
          whileInView={{ x: 0 }}
          transition={transition1}
        />
        <m.div
          initial={{ x: "20%" }}
          whileInView={{ x: 0 }}
          transition={transition1}
        />
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="leftArrow"
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
