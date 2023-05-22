import React from 'react'
import './morningprayer.scss'
import prayer from '../../../../assets/prayer.jpeg'

function MorningPrayer() {
  return (
    <div className='morning'>
      <div className="left">
        <img src={prayer} alt="" />
      </div>
      <div className="right">
        <h1>Prayer Line</h1>
        <p>
          Join us every Tuesday and Thursday morning for powerful prayers for a powerful week.
        </p>
        <span>Tuesdays & Thursdays from 6-6:10am</span>
      </div>
    </div>
  )
}

export default MorningPrayer