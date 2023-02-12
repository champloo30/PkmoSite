import React from 'react'
import './men.scss'
import men from '../../../assets/men.jpeg'

function Men() {
  return (
    <div className='men'>
      <div className="left">
        <img src={men} alt="" />
      </div>
      <div className="right">
        <h1>Men's Meeting</h1>
        <p>
          Brothers! Join us every 4th Saturday morning for a monthly meeting.
        </p>
        <span>Every 4th Saturday @ 11am</span>
      </div>
    </div>
  )
}

export default Men