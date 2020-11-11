import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PaymentInfoBtn from './PaymentInfoBtn'

function CartListTable(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  useEffect(() => {
    //mycartDisplay
    let newMycartDisplay = []

    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      if (index !== -1) {
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="row col-12 px-0">
        <h3 className="cart-title">購物車</h3>
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mycartDisplay.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <img src={item.picture} alt="" />
                      &emsp;<span>{item.name}</span>
                    </td>
                    <td>
                      <span>無</span>
                    </td>
                    <td>
                      <span>NT$ {item.price}</span>
                    </td>
                    <td className="amount">
                      <Link
                        onClick={() => {
                          if (item.amount === 1) return
                          updateCartToLocalStorage(item, false)
                        }}
                      >
                        <img
                          className="icon"
                          src="./images/remove_circle_outline.svg"
                          alt=""
                        />
                      </Link>
                      &ensp;
                      <div className="amount-box">
                        <span>{item.amount}</span>
                      </div>
                      &ensp;
                      <Link
                        onClick={() => updateCartToLocalStorage(item, true)}
                      >
                        <img
                          className="icon"
                          src="./images/add_circle_outline.svg"
                          alt=""
                        />
                      </Link>
                    </td>
                    <td>
                      <span>NT$ {item.amount * item.price}</span>
                    </td>
                    <td>
                      <button type="button" className="btn del-btn">
                        刪除
                      </button>
                    </td>
                  </tr>
                )
              })}
              <tr className="table-text">
                <td>
                  <label for="discount-code">優惠代碼：</label>
                  <input
                    id="discount-code"
                    name="discount-code"
                    className="discount-code"
                    type="text"
                  />
                  <br />
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
      <div className="row col-12 px-0">
        <div className="col-8">
          <div className="cart cart-delivery">
            <table>
              <thead>
                <tr>
                  <th>
                    <h3 className="table-title">選擇送貨及付款方式</h3>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="inner">
              <h5>配送方式</h5>
              <div className="radio-wrap d-flex align-items-center">
                <input type="radio" id="home" name="delivery" value="home" />
                <label for="home">宅配</label>
                <input type="radio" id="711" name="delivery" value="711" />
                <label for="711">超商取貨</label>
                <input
                  type="button"
                  name="store-location"
                  value="選擇門市"
                  className="btn store-location"
                />
              </div>
              <h5>付款方式</h5>
              <div className="radio-wrap d-flex align-items-center">
                <input type="radio" id="credit" name="payment" value="credit" />
                <label for="credit">信用卡</label>
                <input
                  type="radio"
                  id="linepay"
                  name="payment"
                  value="linepay"
                />
                <label for="linepay">LINE PAY</label>
                <input type="radio" id="711pay" name="payment" value="711pay" />
                <label for="711pay">超商取貨付款</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="cart cart-info">
            <table>
              <thead>
                <tr>
                  <th>
                    <h3 className="table-title">訂單資訊</h3>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="inner">
              <div className="d-flex justify-content-between">
                <p>小計：</p>
                <p>{sum(mycartDisplay)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>運費：</p>
                <p>0</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>優惠：</p>
                <p></p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>總計：</p>
                <p>1000</p>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/payment-info">
                  <PaymentInfoBtn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  const empty = (
    <>
      <div className="row col-12 px-0">
        <h3 className="cart-title">購物車</h3>
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colspan="6"
                  className="d-flex justify-content-center text-align-center"
                >
                  購物車內尚無商品
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )

  return dataLoading ? empty : display
}

export default CartListTable
