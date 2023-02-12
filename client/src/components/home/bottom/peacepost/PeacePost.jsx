import React from 'react'
import './peacepost.scss'
import Button from '../../../button/Button'

function PeacePost() {
  return (
    <div className="peace-post" id="peacepost">
      <div className="container">
        <h1>Peace Post</h1>
        <span className="line"></span>
        <h3>Your one stop shop for all Peace updates and events!</h3>
        <Button link={'/peacepost'} label={'peace post'} text={'Here'} />
      </div>
    </div>
  )
}

export default PeacePost