import React from 'react'
import './about.scss'
import Logo from "../../../assets/PKMO-Full-Logo-Big.png"
import Button from '../../button/Button'

function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <img src={Logo} alt="PKMO Logo" />
      </div>
      <div className="right">
        <div className="top-text">
          <h2>“These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.”</h2>
          <h2>John 16:33</h2>
        </div>
        <div className="bottom-text">
          <h1>Learn more about our church organiztion here</h1>
        </div>
        <Button link={'/about'} label={'about us'} text={'About Us'} />
      </div>
    </div>
  )
}

export default About