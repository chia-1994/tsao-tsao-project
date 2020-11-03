import React from 'react'
import './Footer.sass'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <div class="footerIcons">
          <img src="/images/footerIcon01.svg" alt="" />
          <images src="./images/footerIcon02.svg" alt="" />
          <img src="/images/footerIcon03.svg" alt="" />
          <img src="/images/footerIcon04.svg" alt="" />
          <img src="/images/footerIcon05.svg" alt="" />
        </div>
        <div class="footerInfo">
          <ul>
            <li>
              <Link to="">品牌故事</Link>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <Link to="/product">商品列表</Link>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <Link to="/activity">課程活動</Link>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <Link to="/article">文章專欄</Link>
            </li>
          </ul>
        </div>
        {/* <div class="backGroundColor"></div> */}
      </footer>
    </>
  )
}

export default Footer
