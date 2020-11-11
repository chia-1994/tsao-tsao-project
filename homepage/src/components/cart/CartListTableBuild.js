import React from 'react'

import CartDetailBuild from './CartDetailBuild'

function CartListTable(props) {
  return (
    <>
      <div className="row col-12 px-0">
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              <CartDetailBuild />
              <CartDetailBuild />
              <tr className="table-text">
                <td>
                  已享用之優惠
                  <br />
                  <div className="discount-box">
                    <span>優惠促銷</span>
                  </div>
                  &ensp;<span>全站滿 600 元，即享免運優惠</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CartListTable
