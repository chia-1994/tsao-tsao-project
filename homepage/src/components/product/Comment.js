import React, { useState, useEffect } from 'react'
import './Comment.sass'
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap'
import Mypagination from './Mypagination'

function Comment() {
  const [comment, setComment] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  async function getCommentFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(false)

    const url = 'http://localhost:3000/comment/list/api'

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
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
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
                    <p>{comment.date}</p>
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
            <Button>
              <i class="fas fa-pencil-alt"></i>撰寫產品評論
            </Button>
            <div className="total-reviews">
              <div className="total-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div className="total-score">
                <h2>5</h2>
                <div className="reviews">
                  <h6>36 評論</h6>
                </div>
              </div>

              <div className="stars">
                <div className="five">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="four">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="three">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="two">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="one">
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>

            <div className="customer-review">
              {dataLoading ? loading : display}
            </div>
          </div>
          <Mypagination
            postsPerPage={postsPerPage}
            totalPosts={comment.length}
            paginate={paginate}
          />
        </Row>
      </Container>
    </>
  )
}

export default Comment