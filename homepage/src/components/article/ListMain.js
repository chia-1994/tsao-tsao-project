import React, { useState } from 'react'
import './css/.css'
import LatestArticle from './forMain/LatestArticle'
import OtherArticle from './forMain/OtherArticle'
import Featured from './forMain/Featured'
import TypeButton from './forMain/TypeButton'
import DropDownIcon from './forMain/DropDownIcon'

function ListMain(props) {
  const [type, setType] = useState(0)
  console.log(type)
  return (
    <>
      <div className="articleList">
        <LatestArticle />
        <div className="hr"></div>
        <TypeButton setType={setType} />
        <div className="otherArticles">
          <OtherArticle type={type} />
        </div>
        <DropDownIcon />
      </div>
      <div className="recommend">
        <div className="featured">
          <Featured />
        </div>
        <div className="productRecommend">
          <div>
            <img src="./IMG/為您推薦Icon.svg" alt="" />
            <h3>為您推薦</h3>
          </div>
        </div>
        <div className="productLink">
          <img src="https://picsum.photos/id/280/320/320" alt="" />
          <div className="coupon">
            <div>戶外體驗</div>
            <div>限額</div>
          </div>
          <h3>海灘守護-第三期</h3>
          <p>
            它是集體隨時指揮進來並非回麼嘉義不得不，前 進線上打開臨時驚訝......
          </p>
          <div className="productLine"></div>
          <p className="productTime">2020.11.20</p>
          <div className="productLine"></div>
          <div className="productPrice">
            <h3>$1280</h3>
            <img src="./IMG/heart.svg" alt="" />
          </div>
        </div>
        <div className="productLink">
          <img src="https://picsum.photos/id/277/320/320" alt="" />
          <div className="coupon">
            <div>戶外體驗</div>
            <div>限額</div>
          </div>
          <h3>海灘守護-第三期</h3>
          <p>
            它是集體隨時指揮進來並非回麼嘉義不得不，前 進線上打開臨時驚訝......
          </p>
          <div className="productLine"></div>
          <p className="productTime">2020.11.20</p>
          <div className="productLine"></div>
          <div className="productPrice">
            <h3>$1280</h3>
            <img src="./IMG/heart.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ListMain
