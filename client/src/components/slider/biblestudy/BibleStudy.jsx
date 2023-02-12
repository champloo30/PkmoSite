import React from 'react'
import './biblestudy.scss'
import study from '../../../assets/biblestudy.jpeg'

function BibleStudy() {
  return (
    <div className="bible-study">
      <div className="left">
        <h1>Tune In Live</h1>
        <p>
          Join us every Wednesday night for Bible Study, where we go deeper into the word!
        </p>
        <span>Wednesdays @ 7pm</span>
      </div>
      <div className="right">
        <img src={study} alt="" />
      </div>
    </div>
  )
}

export default BibleStudy