import React, { useState } from 'react'
import MyCarousel from '../components/homepage/MyCarousel'
import About from '../components/homepage/About'
import Product from '../components/homepage/Product'
import Activity from '../components/homepage/Activity'

function Home(props) {
  const { isAuth } = props
  return (
    <>
      <MyCarousel />
      <About />
      <Product isAuth={isAuth} />
      <Activity />
    </>
  )
}

export default Home
