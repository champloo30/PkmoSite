import React from 'react'
import './welcome.scss'
import Button from '../../button/Button'

function Welcome() {
  return (
    <div className="welcome" id="welcome">
      <h1>Welcome to the Kingdom</h1>
      <div className="welcome-container">
        <div className="location-box">
          <h2>Join Us</h2>
          <div className="container">
            
            <Button link={'/location'} label={'in person'} text={'In Person'} />
            <Button target={'_blank'} link={'https://www.facebook.com/search/top?q=peace%20kingdom%20ministries%20of%20ohio'} label={'church online'} text={'Online'} />
          </div>
        </div>
        <div>
          <iframe title="Welcome Video" className="welcome-video" width="560" height="315" src="https://www.youtube.com/embed/LL521D_1124" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="message-box">
          <div className="text-container">
            <h2>Message</h2>
            <h3>of the Month</h3>
          </div>
          <Button link={'/messages'} label={'messages'} text={'View'} />
        </div>
      </div>
    </div>
  )
}

export default Welcome