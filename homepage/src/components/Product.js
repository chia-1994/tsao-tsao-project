<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import './Product.sass'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
function Product() {
  const [product, setProduct] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getProductFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const url = 'http://localhost:3030/'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setProduct(data)
  }

  // componenliidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getProductFromServer()
  }, [])

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 2000)
  }, [product])

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
      {product.map((value, index) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={value.picture} />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>{value.price}</Card.Text>
              <Button variant="primary">BUY</Button>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
=======
import React from 'react'
import './Product.sass'

function Product() {
>>>>>>> 1c407610771bec1b400e685664f086587e6e99ed
  return (
    <>
      <div className="product">
        <div className="title">
          <img src="/images/title-product.png" alt="" />
        </div>
<<<<<<< HEAD
        <div>{display}</div>
=======
>>>>>>> 1c407610771bec1b400e685664f086587e6e99ed
      </div>
    </>
  )
}

export default Product
