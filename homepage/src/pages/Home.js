import React, { useState } from 'react'
import Carousel from '../components/homepage/Carousel'
import About from '../components/homepage/About'
import Product from '../components/homepage/Product'
import Activity from '../components/homepage/Activity'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Product />
      <Activity />
      <Footer />
    </>
  )
}

export default Home
