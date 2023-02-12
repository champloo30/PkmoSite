import React from 'react'
import './button.scss'

function Button({link, target, label, text}) {
  return (
    <a href={link} target={target}>
      <button className="button" aria-label={label}>{text}</button>
    </a>
  )
}

export default Button