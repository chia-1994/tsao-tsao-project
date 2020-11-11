import React, { useState } from 'react'

import DropdownArrow from './DropdownArrow'

function CartDropdown(props) {
  return (
    <>
      <div className="row col-12 px-0 justify-content-center">
        <div className="cart-list w-100 mb-3">
          <div className="total-wrap">合計：NT$ 1000</div>
          <div className="cart-dropdown d-flex justify-content-center align-items-center">
            購物車：2件 &ensp;
            <DropdownArrow />
          </div>
        </div>
      </div>
    </>
  )
}
export default CartDropdown
