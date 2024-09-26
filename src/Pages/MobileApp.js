import React from 'react'
import Apple from '../apple.png'
import Google from '../google.png'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <div className='mobileApp_container'>
      <h1>For better experience Download
      <br /> Recipe Finder app</h1>
      <div className='set_app_img'>
        <img  src={Apple} alt="apple_img" />
        <img  src={Google} alt="google_img" />
      </div>
    </div>
  )
}

export default MobileApp
