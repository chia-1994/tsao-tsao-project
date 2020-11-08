import React from 'react'
import './Comment.sass'
import { Col, Button, Form } from 'react-bootstrap'

function CommentInput() {
  return (
    <>
      <Form className="form">
        <div className="info">
          <Form.Group className="input-name col-3">
            <Form.Label>姓名</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="input-email  col-6">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>標題</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>評論</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>膚質選擇</Form.Label>
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
