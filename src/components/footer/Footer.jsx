import React from "react";
import "./footer.css";
import { github, linkedin, logo } from "../../assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="github_icon" />
          <img src={linkedin} alt="linkedin_icon" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
