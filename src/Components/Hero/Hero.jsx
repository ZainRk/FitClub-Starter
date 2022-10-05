import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the-best-ad */}
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
            <div>
            <span>+ 140</span>
             <span>EXPERT COACHES</span>
            </div>
            <div>
                 <span>+978</span>
                  <span>MEMBERS JOINED</span>
            </div>
            <div>
                 <span>+50</span>
                  <span>FITNESS PROGRAMS</span>
            </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
            <button className="btn">Get started</button>
            <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
          <button className="btn">Join Now</button>
          <div className="heart-rate">
              <img src={heart} alt="" />
              <span>Heart Rate</span><span> 116 bpm</span>
          </div>
          {/* hero images */}
          
          <img src={hero_image} alt=""  className="hero-image"/>
          <img src={hero_image_back} alt="" className="hero-image-back"  />
        {/* {calories} */}
        <div className="calories">
            <img src={calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
