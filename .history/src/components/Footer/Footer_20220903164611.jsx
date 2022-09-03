import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="Footer">
      <img src={Github} alt="" />
      <img src={LinkedIn} alt="" />
      <img src={Instagram} alt="" />
    </div>
    <div className="logo-f">
        
    </div>
    </div>
  );
};

export default Footer;
