import React from 'react'
import './noEvent.scss'

function noEvent() {
  return (
    <div className='no-event'>
      <div className="no-event-container">
        <h1>No Event</h1>
        <p>Unfortunately, no event has been scheduled at this current moment. Please check back again for any updates.</p>
      </div>
    </div>
  )
}

export default noEvent