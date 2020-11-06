import React from 'react'
import './Comment.sass'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Comment() {
  return (
    <>
      <div className="main"></div>
      <Container>
        <Row>
          <div className="comment">
            <h5>顧客評論</h5>
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
              <div className="porfile">
                <div className="photo"></div>
                <div className="name">馬林</div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <Col xs={12} md={12}>
                <div className="comment-content">
                  <h6>評論標題</h6>
                  <p>
                    評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字
                    評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字評論文字
                  </p>

                  <div className="comment-time">
                    <p>2020/10/22</p>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Comment
