import React from 'react'
import './event.scss'
import flyer from '../../../assets/bishop-elect-flyer.jpeg'

function Event() {
  return (
    <div className='event'>
      <img src={flyer} alt="" />
    </div>
  )
}

export default Event