import React from 'react'
import './C.sass'

function Carousel() {
  const opacity = {
    opacity: 0,
  }
  const opacity1 = {
    opacity: 1,
  }
  return (
    <>
      <div className="gallery-picture-first" style={opacity1}></div>
      <div className="gallery-picture-second" style={opacity}></div>
      <div className="gallery-picture-third" style={opacity}></div>
    </>
  )
}

export default Carousel
