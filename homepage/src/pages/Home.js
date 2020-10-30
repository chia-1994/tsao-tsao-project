import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Product from '../components/Product'
import Activity from '../components/Activity'

function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Product />
      <Activity />
    </>
  )
}

export default Home
