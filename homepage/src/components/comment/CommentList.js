import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import moment from 'moment'
import { Rate } from 'antd'

function CommentList(props) {
  const { displayComment, setDisplayComment } = props

  async function deleteCommentFromServer(sid) {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/comment/del/' + sid

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // 設定資料
    if (!displayComment.sid) {
      const newComment = displayComment.filter((item, index) => {
        return item.sid !== sid
      })

      setDisplayComment(newComment)
      alert('已刪除')
    }
  }

  return (
    <>
      <div className="customer-review">
        {displayComment.map((item, index) => {
          return (
            <>
              <div className="porfile">
                <div className="photo"></div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="rating">
                    <Rate
                      disabled
                      value={item.rating}
                      style={{ color: '#95C375', fontSize: '14px' }}
                    />
                  </div>
                  <div className="skintype">您的肌膚類型:{item.skin_type}</div>
                </div>
              </div>
              <Col xs={12} md={12}>
                <div className="comment-content">
                  <h6>{item.title}</h6>
                  <p>{item.review}</p>
                  <div className="comment-time">
                    <p>{moment(item.date).format('YYYY-MM-DD')}</p>
                  </div>
                  <Button
                    onClick={() => deleteCommentFromServer(item.sid)}
                    style={{ fontSize: '16px', color: 'white', margin: '10px' }}
                    variant="success"
                  >
                    刪除
                  </Button>
                </div>
              </Col>
            </>
          )
        })}
      </div>
    </>
  )
}

export default CommentList
