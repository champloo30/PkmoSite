import React from 'react'
import './bottom.scss'
import ConnectHome from './connectHome/ConnectHome'
import PeacePost from './peacepost/PeacePost'

function Bottom() {
  return (
    <div className='bottom'>
      <PeacePost />
      <ConnectHome />
    </div>
  )
}

export default Bottom