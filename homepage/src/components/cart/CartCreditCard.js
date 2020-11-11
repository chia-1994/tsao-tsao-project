import React from 'react'

function CartCreditCard(props) {
  return (
    <>
      <div className="col-5">
        <div className="cart cart-info">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">信用卡資訊</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <label for="cardNum" className="mb-3">
              卡號：
            </label>
            <input
              type="text"
              name="cardNum"
              className="mr-1 mb-3"
              maxLength="16"
              pattern=""
            />
            <br />
            <label for="cardExpire" className="">
              到期日：
            </label>
            <input
              type="text"
              name="cardExpire"
              className="credit-num mr-1 mb-3"
              maxLength="2"
              pattern="^[0-1]"
            />
            &frasl;
            <input
              type="text"
              name="cardExpire"
              className="credit-num mr-1 mb-3"
              maxLength="2"
              pattern=""
            />
            <label for="securityCode" className="">
              安全碼：
            </label>
            <input
              type="text"
              name="securityCode"
              className="credit-num mr-1 mb-3"
              maxLength="3"
              pattern=""
            />
            <br />
            <label for="cardName" className="mb-3">
              持卡人姓名：
            </label>
            <input
              type="text"
              name="cardName"
              className="credit-name"
              pattern=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCreditCard
