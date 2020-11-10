import React, { useState, useEffect } from 'react'
import '../css/.css'
function OtherArticle() {
  const [article, setArticle] = useState([])

  async function getArticleFromServer() {
    const url = 'http://localhost:3000/try-db'

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
    // 設定資料
    setArticle(data)
  }
  useEffect(() => {
    getArticleFromServer()
  }, [])

  const display = (
    <>
      {article.map((value, index) => {
        return (
          <div
            class={value.sid % 2 === 0 ? 'otherArticleReverse' : 'otherArticle'}
          >
            <div class="forHover">
              <img
                src={'http://localhost:3001/Img/文章圖片/' + value.picName}
                alt=""
              />
            </div>
            <div class="text">
              <h3>{value.title}</h3>
              <p>{value.createTime}</p>
              <button>
                <a href="#">繼續閱讀</a>
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
  return <>{display}</>
}

export default OtherArticle
