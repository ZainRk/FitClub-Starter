import React from 'react'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div className="Programs" id='programs'>
        <div className="program-header">
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>

        <div className="program-categories">
          {programsData.map((program)=>(
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span> <img src={RightArrow} alt="" />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs