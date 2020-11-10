import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../list.css'
import Main from '../components/Product/Main'
import UnderDescription from '../components/Product/UnderDescription'
import Comment from '../components/comment/Comment'
import OtherSell from '../components/Product/OtherSell'
function ProductList() {
  const [ScrollY, setScrollY] = useState()
  useEffect(() => {
    const fix = document.querySelector('#fix')
    const small_product = document.querySelector('#small-product')
    const scroll = document.querySelector('#scroll')
    // window.scrollY
    const newY = () => {
      setScrollY(window.scrollY)
      // // if (ScrollY < 110) {
      // //   fix.style.cssText = '  position:static;'
      // }
      if (ScrollY >= 0) {
        fix.style.cssText = '  position:sticky;top:70px;'
      } else if (ScrollY >= 3000) {
        fix.style.cssText = 'static'
      }
      if (window.scrollY < 4000) {
        small_product.style.transform = `translate3d(0px, ${window.scrollY}px, 0px)`
      }
    }
    window.addEventListener('scroll', newY)
    return (
      () => {
        window.removeEventListener('scroll', ScrollY)
      },
      []
    )
  })
  return (
    <>
      <Main />
      <UnderDescription />
      <Comment />
      <OtherSell />
    </>
  )
}
export default ProductList
