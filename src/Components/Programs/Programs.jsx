import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/* {Header} */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
               <div className="join-now">
                   <span>Join Now</span><span><img src={rightArrow} alt="" /></span>
               </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Programs