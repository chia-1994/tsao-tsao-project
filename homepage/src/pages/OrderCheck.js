import React, { useState } from 'react'
import bootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CartDropdown from '../components/cart/CartDropdown'
import CartListTableBuild from '../components/cart/CartListTableBuild'
import OrderListCard from '../components/cart/OrderListCard'
import PaymentInfoBtn from '../components/cart/PaymentInfoBtn'
import CheckoutBtn from '../components/cart/CheckoutBtn'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function OrderCheck(props) {
  return (
    <div className="container">
      <div className="container">
        <div classNameName="row justify-content-center">
          <div className="step-wrap">
            <img src="./images/step3.png" alt="" />
          </div>
        </div>
        <CartDropdown />
        <CartListTableBuild />
        <OrderListCard />
        <div className="row col-12 mb-5 justify-content-between">
          <Link to="/order-check">
            <PaymentInfoBtn />
          </Link>
          <Link to="/order-done">
            <CheckoutBtn />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderCheck
