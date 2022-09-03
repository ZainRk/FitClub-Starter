import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">    
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
        </div>
        <div className="right-h">right side</div>

    </div>
  )
}

export default Hero