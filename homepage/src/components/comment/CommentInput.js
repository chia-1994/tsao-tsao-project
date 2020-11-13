import React, { useState, useEffect } from 'react'
import './Comment.sass'
import { Button, Form } from 'react-bootstrap'
// import { Rate } from 'antd'
// import 'antd/dist/antd.css'
import ReactStars from 'react-rating-stars-component'

function CommentInput(props) {
  const { comment, setComment, displayComment, setDisplayComment } = props
  const [dataLoading, setDataLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const [skin, setSkin] = useState('')

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  async function addCommentToSever() {
    //const newData = { name, email, title, review }
    const newData = { name, email, skin, rating, title, review }
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/comment/add'

    // 設定為json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    //警示
    setTimeout(() => {
      setDataLoading(false)
      alert('已新增評論')
      // props.history.push('/product')
    }, 500)
  }

  return (
    <>
      <Form className="form">
        <div className="info">
          <Form.Group className="input-name col-3">
            <h6>姓名</h6>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input-email  col-6">
            <h6>Email</h6>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="rating">
          <h6>評分</h6>
          {/* <Rate
            defaultValue={1}
            style={{ color: '#95C375' }}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          /> */}
          {/* <ReactStars
            count={5}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            size={24}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          /> */}
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <h6>標題</h6>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h6>評論</h6>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h6>膚質</h6>
          <Form.Control
            as="select"
            value={skin}
            onChange={(e) => setSkin(e.target.value)}
          >
            <option value="">請選擇</option>
            <option value="1">油性</option>
            <option value="2">混合肌</option>
            <option value="3">乾性</option>
          </Form.Control>
        </Form.Group>
        <Button
          className="comment-btn"
          style={{ fontSize: '16px', color: 'white', float: 'right' }}
          variant="success"
          onClick={(event) => {
            if (review !== '') {
              // 建立一個新的Comment項目
              const newItem = {
                // id: +new Date(),
                name: name,
                title: title,
                review: review,
                skin: skin,
              }

              const newComment = [newItem, ...displayComment]
              setDisplayComment(newComment)

              // 清空輸入框
              setName('')
              setEmail('')
              setTitle('')
              setReview('')
              setSkin('')
              //儲存進資料庫
              addCommentToSever()
            }
          }}
        >
          送出評論
        </Button>
      </Form>
    </>
  )
}

export default CommentInput
