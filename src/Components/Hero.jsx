import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Heart from '../assets/heart.png';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'
import {motion} from 'framer-motion'


const Hero = () => {
    const mobile=window.innerWidth<=768?true:false;
    const transition={type:'spring', duration:3}
  return (
 <div className="hero" id='home'>
    <div className="left">
        <Header/>

        <div className="ad">
            <div></div>
            <span>FIND YOUR FITNESS TRIBE</span>
        </div>
              {/* Heading */}

    <div className="hero-text">
<div>
    <span>BE    </span> 
    <span className='stroke-text'>STRONGER </span>
</div>
<div>
    <span>THAN YOUR EXCUSES</span>
    </div>
    <div>
    <span className='quote'>Fitness is not a destination, it's a way of life.</span>
    </div>
 </div>
                
                
                 {/* Figures */}

        <div className="figures">
            <div>
                <span>+150 </span>
                <span>EXPERT COACHES</span>
            </div>
           
            <div>
                <span>+800 </span>
                <span>MEMBERS JOINED</span>
            </div>

            <div>
                <span>+40 </span>
                <span>FITNESS PROGRAMS</span>
            </div>
        </div>

        {/* Hero */}

        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>



  </div>


    <div className="right">
        <button className='btn'>Join Now</button>

        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>118 BPM</span>
       </motion.div>

                {/* HERO IMAGE */}

                <img src={hero_image} alt="" className='hero-image' />
               
               <img src={hero_image_back} alt="" className='hero-image-back' />
               
                

            <motion.div 
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>230kcal</span>
                </div>
              
            </motion.div>




    </div>
 </div>
  )
}

export default Hero