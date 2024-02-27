import React from 'react'
import "../stylesheets/Footer.css"
import fb from "../asserts/fb.jpg"
import telephone from "../asserts/telephone.png"
import web from "../asserts/web.png"

function Footer() {
  return (
    <div className='footer'>
      <img src={telephone} alt="telephone" />
      <img src={fb} alt="fb" />
      <img src={web} alt="web" />
    </div>
  )
}

export default Footer
