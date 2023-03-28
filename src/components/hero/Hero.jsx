import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import { heart, heroImg, heroImgBack, calories } from "../../assets";
import { transition1 } from "../../transitions";

import { motion as m } from "framer-motion";

const Hero = ({ active, setActive }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition1}
      className="hero"
      id="home"
    >
      <div className="blur hero-blur" />
      <div className="left-h">
        <Header isactive={active} isSetActive={setActive} />
        <div className="the-best-ad">
          <m.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={transition1}
          />
          <span>the best fitness club in the town</span>
        </div>
        {/*Texto */}
        <m.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition1}
          className="hero-text"
        >
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </m.div>
        {/*Figures */}
        <div className="figure">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+800</span>
            <span>member joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Buttons */}
        <div className="hero-buttons">
          <m.button whileHover={{ scale: 1.09 }} className="btn">
            Get Started
          </m.button>
          <m.button whileHover={{ scale: 1.09 }} className="btn">
            Learn More
          </m.button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <m.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition1}
          className="heart-rate"
        >
          <m.img
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1, 1, 1.5, 1] }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            src={heart}
            alt="heart"
          />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </m.div>
        {/*Images */}
        <m.img
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition1}
          src={heroImg}
          alt="fitnessMan"
          className="hero-image"
        />
        <m.img
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition1}
          src={heroImgBack}
          alt="lines"
          className="hero-image-back"
        />
        {/*Calories */}
        <m.div
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition1}
          className="calories"
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default Hero;
