import React from 'react'
import './hero.scss'
import PKMOid from "../../../assets/PKMO-ID-White.png"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Welcome to</h2>
        <img className="PKMOid" src={PKMOid} alt="Peace Kingdom Ministries of Ohio. Preaching the Gospel, empowering people, changing the world!" />
      </div>
    </div>
  )
}

export default Hero