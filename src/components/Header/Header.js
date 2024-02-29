import React from 'react';
import logo from '../../assets/logo.png'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <img src={logo}  className='logo' alt="" />
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>

    </div>
  )
}

export default Header
