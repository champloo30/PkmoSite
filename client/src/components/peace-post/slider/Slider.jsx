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
  const [isActive, setIsActive] = useState(false)

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

  function toggleActive() {
    document.getElementById(`${slideIndex}`).classList.remove('active')
    document.getElementById(`${slideIndex}`).classList.add('active')
  }

  function handleLeft() {
    document.getElementById(`${slideIndex}`).classList.remove('active')
    setIsActive(false)
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
      document.getElementById(`${slideIndex - 1}`).classList.add('active')
    } else {
      setSlideIndex(slideIndex + 3)
      document.getElementById(`${slideIndex + 3}`).classList.add('active')
    }
    console.log(slideIndex)
  }

  function handleRight() {
    document.getElementById(`${slideIndex}`).classList.remove('active')
    setIsActive(false)
    if (slideIndex < 3) {
      setSlideIndex(slideIndex + 1)
      document.getElementById(`${slideIndex + 1}`).classList.add('active')
    } else{
      setSlideIndex(slideIndex - 3)
      document.getElementById(`${slideIndex - 3}`).classList.add('active')
    }
  }

  function handleJump(slideIndex) {
    setSlideIndex(slideIndex)
    // document.getElementById(`${slideIndex}`).classList.remove('active')
    // setSlideIndex(slideIndex)
    // document.getElementById(`${slideIndex}`).classList.add('active')
    // console.log(slideIndex);
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
          <div id={slideIndex} key={slideIndex} className={slideIndex ? 'indicator' : 'indicator active'} onClick={() => handleJump(slideIndex)}></div>
        ))}
      </div>
    </div>
  )
}

export default Slider