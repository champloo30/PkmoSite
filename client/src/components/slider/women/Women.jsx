import React from 'react'
import './women.scss'
import women from '../../../assets/women.jpeg'

function Women() {
  return (
    <div className="women">
      <div className="left">
        <h1>Women's Meeting</h1>
        <p>
          Calling all ladies! Join us every 3rd Saturday morning for a monthly meeting.
        </p>
        <span>Every 3rd Saturday @ 11am</span>
      </div>
      <div className="right">
        <img src={women} alt="" />
      </div>
    </div>
  )
}

export default Women