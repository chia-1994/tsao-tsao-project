import React, { useState, useEffect } from 'react'
import './Activity.sass'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Activity() {
  return (
    <>
      <div className="activity">
        <div className="title">
          <img src="/images/title-activity.png" alt="" />
        </div>
        {/* <div className="leaf2">
          <img src="/images/leaf2.png" alt="" />
        </div> */}
        <div className="activity-content">
          <div className="photo">
            <img src="/images/course-3.jpg" alt="" />
          </div>
          <Col xs={6} md={3}>
            <div className="card">
              <h6>【講座】</h6>
              <h3>超親民環保攻略</h3>
              <p>
                台灣每個人都很不喜歡舊的東西，所以對待車子都很小心翼翼怕弄髒弄舊，但也因為這樣的態度而十分喜歡買新的東西，反思一下，如果大家都那麼細心呵護車子，二手的車況會糟到哪裡？如果我們能一直循環使用車況佳的二手車，那他們就不會一直頻繁製造了。
              </p>
              <h6>
                2020/11/30
                <br />
                松山文創園區 索票入場
              </h6>
            </div>
            <Button variant="outline-primary" size="sm" className="mt-5">
              了解更多
            </Button>
          </Col>
        </div>
        <div className="activity-content-right">
          <Col xs={6} md={3}>
            <div className="card">
              <h6>【講座】</h6>
              <h3>超親民環保攻略</h3>
              <p>
                台灣每個人都很不喜歡舊的東西，所以對待車子都很小心翼翼怕弄髒弄舊，但也因為這樣的態度而十分喜歡買新的東西，反思一下，如果大家都那麼細心呵護車子，二手的車況會糟到哪裡？如果我們能一直循環使用車況佳的二手車，那他們就不會一直頻繁製造了。
              </p>
              <h6>
                2020/11/30
                <br />
                松山文創園區 索票入場
              </h6>
            </div>
            <Button variant="outline-primary" size="sm" className="mt-5">
              了解更多
            </Button>
          </Col>
          <div className="photo2 img-2">
            <img src="/images/course-5.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="article">
        <div className="title">
          <img src="/images/title-article-2.png" alt="" />
        </div>
        <Container>
          <Row>
            <Col xs={6} md={4} className="article-left">
              <img src="/images/course-2.jpg" alt="" />
              <div className="preview">
                <h3>jkljwlejklr</h3>
                <p>jkehkrowehlkrew</p>
              </div>
              <Button variant="outline-primary" size="sm">
                了解更多
              </Button>
            </Col>
            <Col xs={6} md={4} className="article-middle">
              <img src="/images/course-2.jpg" alt="" />
              <div className="preview">
                <h3>jkljwlejklr</h3>
                <p>jkehkrowehlkrew</p>
              </div>
              <Button variant="outline-primary" size="sm">
                了解更多
              </Button>
            </Col>
            <Col xs={6} md={4} className="article-right">
              <img src="/images/course-2.jpg" alt="" />
              <div className="preview">
                <h3>jkljwlejklr</h3>
                <p>jkehkrowehlkrew</p>
              </div>
              <Button variant="outline-primary" size="sm">
                了解更多
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Activity
