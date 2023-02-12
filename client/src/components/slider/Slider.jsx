import React, { useState } from 'react'
import './slider.scss'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
// import Indicator from './indicator/Indicator'
import BibleStudy from './biblestudy/BibleStudy'
import MorningPrayer from './morningprayer/MorningPrayer'
import Women from './women/Women'
import Men from './men/Men'

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const slides = [
    {
      id: 1,
      slide: <BibleStudy />
    },
    {
      id: 2,
      slide: <MorningPrayer />
    },
    {
      id: 3,
      slide: <Women />
    },
    {
      id: 4,
      slide: <Men />
    },
  ]

  function handleLeft() {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)

  }

  function handleRight() {
    setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
  }

  function handleJump(slideIndex) {
    setSlideIndex(slideIndex)
  }

  return (
    <div className='slider'>
      <div className="arrows">
        <ChevronLeft style={{color: 'white', cursor: 'pointer'}} onClick={() => handleLeft()} />
        <ChevronRight style={{color: 'white', cursor: 'pointer'}} onClick={() => handleRight()} />
      </div>
      {slides[slideIndex].slide}
      <div className="slide-indicators">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className='indicator' onClick={() => handleJump(slideIndex)}></div>
        ))}
      </div>
    </div>
  )
}

export default Slider