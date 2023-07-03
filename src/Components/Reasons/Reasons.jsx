import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
<div className="left-1">
    <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />

</div>
<div className="right-1">
     <span>Some Reasons</span>
     <div>
        <span className='stroke-text'>Why  </span>
        <span>Choose Us</span>
            </div>
        <div className='details'>
    
    <div>
        <img src={tick} alt=""></img>
        <span>OVER 150+ EXPERT TRAINERS</span>
    </div>

    <div>
        <img src={tick} alt="" />
        <span>TRAIN ACCORDING TO YOUR NEEDS</span>
    </div>

    <div>
        <img src={tick} alt="" />
        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
    </div>

    <div>
        <img src={tick} alt="" />
        <span>40+ FITNESS PROGRAMS AT LOWEST PRICE
        </span>
        </div>
    </div>
        <span style={{color:"grey",fontWeight:"normal"}}>OUR PARTNERS</span>    
        <div className="partners">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={nb} alt="" />
         </div>        



    </div>
 </div>
    )
}

export default Reasons