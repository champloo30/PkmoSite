import React from 'react'
import Button from '../../../button/Button'
import './connectHome.scss'
import facebook from '../../../../assets/icons8-facebook.svg'
import youtube from '../../../../assets/icons8-youtube.svg'

function Connect() {
  return (
    <div className='connect-home'>
      <div className="connect-home-container">
        <h1>Get Connected</h1>
        <div className="icons">
          <a href="http://www.facebook.com/pkmohio" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="" />
          </a>
          <a href="http://www.youtube.com/@PeaceKingdomMinistriesofOhio" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="" />
          </a>
        </div>
        <p>- OR -</p>
        <Button link={'/connect'} label={'connect'} text={'Here'} />
      </div>
    </div>
  )
}

export default Connect