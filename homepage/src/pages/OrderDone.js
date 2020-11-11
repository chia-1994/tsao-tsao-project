import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import OrderListCard from '../components/cart/OrderListCard'
import BackToShopBtn from '../components/cart/BackToShopBtn'

function OrderDone(props) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-3">
          <h3>感謝您的購買！</h3>
        </div>
        <OrderListCard />
        <div className="row col-12 mb-5 justify-content-center">
          <Link to="/ShopList">
            <BackToShopBtn />
          </Link>
        </div>
      </div>
    </>
  )
}
export default OrderDone
