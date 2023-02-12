import React from 'react'
import './info.scss'

function Info() {
  return (
    <div className='info'>
      <div className="left">
        <h1>Service Times</h1>
        <div className="times">
          <div className="time">
            <h2>Sunday:</h2>
            <p>Sunday School: 10am</p>
            <p>Main Service: 11am</p>
          </div>
          <div className="time">
            <h2>Wednesday:</h2>
            <p>Bible Study: 7pm</p>
          </div>
        </div>
        <h2>Where:</h2>
        <span>115 Wilson Ave Columbus, OH 43205</span>
        <span className='or'>- OR -</span>
        <span>Online</span>
      </div>
      <div className="right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0054176691833!2d-82.96857958461777!3d39.9636315794204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883888e609b8b243%3A0xab558810127c7a87!2s115%20Wilson%20Ave%2C%20Columbus%2C%20OH%2043205!5e0!3m2!1sen!2sus!4v1637288693513!5m2!1sen!2sus" title="Google Map Location 115 Wilson Aveune" className="googlemaps" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Info