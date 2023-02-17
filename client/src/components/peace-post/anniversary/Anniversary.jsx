import React from 'react'
import './anniversary.scss'
import Ross from '../../../assets/BishopRoss.jpeg'

function Anniversary() {
  return (
    <div className='anniversary'>
      <div className="anniversary-container">
        <div className="top">
          <h1>42ND CHURCH ANNIVERSARY</h1>
          <div className="hr-line"></div>
        </div>
        <div className="middle">
          <div className="left">
            <p>115 Wilson Ave</p>
            <p>Columbus, OH 43205</p>
            <p>Sunday School @ 10am</p>
            <p>Main Service @ 11am</p>
          </div>
          <div className="right">
            <img className='ross' src={Ross} alt="" />
          </div>
        </div>
        <div className="bottom">
          <p>
            Join us as we celebrate the <span>42nd anniversary of Peace Kingdom Ministries of Ohio</span>, formally known as Peace Missionary Baptist Church. With Bishop Jerome Ross as our guest speaker, morning worship will begin at 11am, promptly following Sunday School beginning at 10am.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Anniversary