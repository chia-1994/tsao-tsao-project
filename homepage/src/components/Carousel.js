import React from 'react'
import './C.sass'

function Carousel() {
  return (
    <>
      <div className="gallery-picture-first">
        <img src="images/1-1.png" alt="" />
      </div>
      {/* <div className="gallery-picture-second">
        <img src="/images/3.jpg" alt="" />
      </div> */}

      {/* {setInterval(() => {
        document.getElementsByClassName(
          'gallery-picture-first'
        ).style.opacity = 1
      }, 10000)}

      {setInterval(() => {
        document.getElementsByClassName(
          'gallery-picture-second'
        ).style.opacity = 1
      }, 10000)} */}
    </>
  )
}

export default Carousel
