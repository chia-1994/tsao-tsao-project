import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.sass'

function Navebar() {
  const [click, setClick] = useState(false)

  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navberLogo">
          <img src="/images/navbarLogo.svg" alt="圖片遺失" />
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              品牌故事
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
              商品列表
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/activity"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              課程活動
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/article" className="nav-links" onClick={closeMobileMenu}>
              文章專欄
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/member" className="nav-links" onClick={closeMobileMenu}>
              <img src="/images/member.svg" alt="圖片遺失" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              <img src="/images/購物車.svg" alt="圖片遺失" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navebar
