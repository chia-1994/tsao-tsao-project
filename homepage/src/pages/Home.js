import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Product from '../components/Product'

function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Product />
    </>
  )
}

export default Home
