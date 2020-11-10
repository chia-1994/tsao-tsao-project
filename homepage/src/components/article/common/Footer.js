import React, { useState } from 'react'
// import './../../css/.css'
function Footer() {
  return (
    <>
      <footer>
        <div class="footerIcons">
          <img src="./IMG/footerIcon01.svg" alt="" />
          <img src="./IMG/footerIcon02.svg" alt="" />
          <img src="./IMG/footerIcon03.svg" alt="" />
          <img src="./IMG/footerIcon04.svg" alt="" />
          <img src="./IMG/footerIcon05.svg" alt="" />
        </div>
        <div class="footerInfo">
          <ul>
            <li>
              <a href="#">品牌故事</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href="#">商品列表</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href="#">課程活動</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href="#">文章專欄</a>
            </li>
          </ul>
        </div>
        <div class="backGroundColor"></div>
      </footer>
    </>
  )
}

export default Footer
