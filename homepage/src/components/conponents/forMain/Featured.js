import React, { useState, useEffect } from 'react'
import '../css/.css'
function Featured() {
  const [article, setArticle] = useState([])

  async function getArticleFromServer() {
    const url = 'http://localhost:3000/try-db-featured'

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
          <div class="featuredBlock">
            <button>
              <a href="#">{value.sid}</a>
            </button>
            <h3>{value.title}</h3>
            <div class="line"></div>
          </div>
        )
      })}
    </>
  )
  return (
    <>
      <div class="featuredTop">艸艸精選文章</div>
      {display}
    </>
  )
}

export default Featured
