import React from 'react'
import Button from '../../../button/Button'
import './connectHome.scss'
import facebook from '../../../../assets/icons8-facebook.svg'
import youtube from '../../../../assets/icons8-youtube.svg'

function Connect() {
  return (
    <div className='connect-home'>
      <div className="connect-home-container">
        <h1>Join the Kingdom Connection</h1>
        <div className="icons">
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
        </div>
        <p>- OR -</p>
        <Button link={'/connect'} label={'connect'} text={'Here'} />
      </div>
    </div>
  )
}

export default Connect