import React, { useState } from 'react'
import './css/.css'
import LatestArticle from './forMain/LatestArticle'
import OtherArticle from './forMain/OtherArticle'
import Featured from './forMain/Featured'
function Main() {
  return (
    <>
      <main>
        <div class="articleList">
          <LatestArticle />
          <div class="hr"></div>
          <div class="otherArticles">
            <OtherArticle />
          </div>
          <div class="dropIcon">
            <img src="./IMG/dropDown.svg" />
          </div>
        </div>
        <div class="recommend">
          <div class="featured">
            <Featured />
          </div>
          <div class="productRecommend">
            <div>
              <img src="./IMG/為您推薦Icon.svg" alt="" />
              <h3>為您推薦</h3>
            </div>
          </div>
          <div class="productLink">
            <img src="https://picsum.photos/id/280/320/320" alt="" />
            <div class="coupon">
              <div>戶外體驗</div>
              <div>限額</div>
            </div>
            <h3>海灘守護-第三期</h3>
            <p>
              它是集體隨時指揮進來並非回麼嘉義不得不，前
              進線上打開臨時驚訝......
            </p>
            <div class="productLine"></div>
            <p class="productTime">2020.11.20</p>
            <div class="productLine"></div>
            <div class="productPrice">
              <h3>$1280</h3>
              <img src="./IMG/heart.svg" alt="" />
            </div>
          </div>
          <div class="productLink">
            <img src="https://picsum.photos/id/277/320/320" alt="" />
            <div class="coupon">
              <div>戶外體驗</div>
              <div>限額</div>
            </div>
            <h3>海灘守護-第三期</h3>
            <p>
              它是集體隨時指揮進來並非回麼嘉義不得不，前
              進線上打開臨時驚訝......
            </p>
            <div class="productLine"></div>
            <p class="productTime">2020.11.20</p>
            <div class="productLine"></div>
            <div class="productPrice">
              <h3>$1280</h3>
              <img src="./IMG/heart.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
