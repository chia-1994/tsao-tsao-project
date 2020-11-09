import React from 'react'
import './Comment.sass'
import { Button, Form } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'

function CommentInput() {
  return (
    <>
      <Form className="form">
        <div className="info">
          <Form.Group className="input-name col-3">
            <h6>姓名</h6>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-email  col-6">
            <h6>Email address</h6>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </div>
        <div className="rating">
          <h6>評分</h6>
          <Rate defaultValue={1} style={{ color: '#95C375' }} />
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <h6>標題</h6>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h6>評論</h6>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h6>膚質</h6>
          <Form.Control as="select">
            <option>油性</option>
            <option>混合肌</option>
            <option>乾性</option>
          </Form.Control>
        </Form.Group>
        <Button className="btn">送出評論</Button>
      </Form>
    </>
  )
}

export default CommentInput
