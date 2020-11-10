import React, { useState, useEffect } from 'react'
import SmallProduct from './SmallProduct'

import Big from './big'

function Product() {
  return (
    <>
      <div class="product">
        <div class="product-main">
          <Big imgUrl="http://localhost:3001/img/2.jpg" />
          <img src="http://localhost:3001/img/2.jpg" alt="" />
          <img src="http://localhost:3001/img/3.jpg" alt="" />
          <img src="http://localhost:3001/img/4.jpg" alt="" />
          <img src="http://localhost:3001/img/5.jpg" alt="" />
        </div>
        <SmallProduct />
      </div>
    </>
  )
}

export default Product
