import React,{useState} from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import rigthArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import {motion} from 'framer-motion'

 const Testimonial = () => {
    const transition={type:'spring', duration:3}

    const [selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;

  return (
   <div className="Testimonials">
    <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
            <span style={{color:'orange'}}>{testimonialsData[selected].name}</span>{"  "}
        <span>- {testimonialsData[selected].status}</span>
        </span>
    </div>
 
    <div className="right-t">
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
            <img onClick={()=>{selected===0?setSelected(tLength-1):setSelected((prev)=>prev-1)}} src={leftArrow} alt="" />
            <img onClick={()=>{selected===tLength-1?setSelected(0):setSelected((prev)=>prev+1)}} src={rigthArrow} alt="" />
        </div>
    </div> 


   </div>
 )
}

export default Testimonial;