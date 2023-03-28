import React from "react";
import "./navbar.css";

const Navbar = ({ active, setActive }) => {
  return (
    <div className={`${active ? "navbar" : "navbar-hidden"}`}>
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li onClick={() => setActive(!active)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#programs">Programs</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#reasons">Why us</a>
          </li>
          <li onClick={() => setActive(!active)}>
            {" "}
            <a href="#plans">Plans</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
