import React, { useState } from 'react'
import bootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CartDropdown from '../components/cart/CartDropdown'
import CartListTableBuild from '../components/cart/CartListTableBuild'
import CartReceive from '../components/cart/CartReceive'
import CartCreditCard from '../components/cart/CartCreditCard'
import CartRemarks from '../components/cart/CartRemarks'
import CartReceipt from '../components/cart/CartReceipt'
import BackToCartBtn from '../components/cart/BackToCartBtn'
import RecheckOrderBtn from '../components/cart/RecheckOrderBtn'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function PaymentInfo(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="step-wrap">
          <img src="./images/step2.png" alt="" />
        </div>
      </div>
      <CartDropdown />
      <CartListTableBuild />
      <div className="row col-12 px-0">
        <CartReceive />
        <CartCreditCard />
      </div>
      <div className="row col-12 px-0">
        <CartRemarks />
        <CartReceipt />
      </div>
      <div className="row col-12 justify-content-between mb-5">
        <Link to="/cart">
          <BackToCartBtn />
        </Link>
        <Link to="/order-check">
          <RecheckOrderBtn />
        </Link>
      </div>
    </div>
  )
}

export default PaymentInfo
