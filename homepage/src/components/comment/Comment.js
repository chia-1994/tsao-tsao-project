import React, { useState, useEffect } from 'react'
import './Comment.sass'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Mypagination from './Mypagination'
import moment from 'moment'
import CommentInput from './CommentInput'
import { Rate } from 'antd'
import 'antd/dist/antd.css'

function Comment() {
  const [comment, setComment] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)
  //顯示評論的填寫區
  const [showInput, setShowInput] = useState(false)

  async function getCommentFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(false)

    const url = 'http://localhost:3000/comment/list'

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
    setComment(data)
  }

  // componenliidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getCommentFromServer()
  }, [])

  // 每次total資料有改變，0.1秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 100)
  }, [comment])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  //設定頁碼
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentComment = comment.slice(indexOfFirstPost, indexOfLastPost)
  //目前的頁面
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //評論呈現
  const display = (
    <>
      <div className="customer-review">
        {currentComment.map((comment, index) => {
          return (
            <>
              <div className="porfile">
                <div className="photo"></div>
                <div className="info">
                  <div className="name">{comment.name}</div>
                  <div className="rating">
                    <Rate
                      disabled
                      value={5}
                      style={{ color: '#95C375', fontSize: '14px' }}
                    />
                  </div>
                  <div className="skintype">
                    您的肌膚類型:{comment.skin_type}
                  </div>
                </div>
              </div>
              <Col xs={12} md={12}>
                <div className="comment-content">
                  <h6>{comment.title}</h6>
                  <p>{comment.content}</p>
                  <div className="comment-time">
                    <p>{moment(comment.date).format('YYYY-MM-DD')}</p>
                  </div>
                </div>
              </Col>
            </>
          )
        })}
      </div>
    </>
  )

  return (
    <>
      <div className="main"></div>
      <Container>
        <Row>
          <div className="comment">
            <h5>顧客評論</h5>
            <Button
              style={{ fontSize: '16px', color: 'white', float: 'right' }}
              title="關閉"
              onClick={() => setShowInput(!showInput)}
            >
              {showInput ? '關閉' : '撰寫產品評論'}
            </Button>
            {showInput ? <CommentInput /> : ''}

            <div className="total-reviews">
              <div className="total-rating">
                <Rate
                  disabled
                  defaultValue={5}
                  style={{ color: '#95C375', fontSize: '16px' }}
                />
                {/* <i class="fas fa-star"></i> */}
              </div>
              <div className="total-score">
                <h2>5</h2>
                <div className="reviews">
                  <h6>36 評論</h6>
                </div>
              </div>

              <div className="stars">
                <div className="five">
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="four">
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="three">
                  <Rate
                    disabled
                    defaultValue={3}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="two">
                  <Rate
                    disabled
                    defaultValue={2}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
                <div className="one">
                  <Rate
                    disabled
                    defaultValue={1}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>

            <div className="customer-review">
              {dataLoading ? loading : display}
            </div>
          </div>
          <div className="pagination-area">
            <Mypagination
              postsPerPage={postsPerPage}
              totalPosts={comment.length}
              paginate={paginate}
            />
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Comment
