import React, { useState } from 'react'
import './css/SearchInput.css'

function SearchInput() {
  const [mydata, setData] = useState()
  const [inputSearch, setinputSearch] = useState('')
  const sendData = async () => {
    const res = await fetch('http://localhost:3000/article/forSearch', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ inputSearch: inputSearch }),
    })
    const data = res.json()
  }
  console.log(inputSearch)
  return (
    <>
      <div className="searchInput">
        <i
          onClick={() => {
            sendData()
          }}
          className="fas fa-search"
        ></i>
        <input
          value={inputSearch}
          onChange={(e) => {
            setinputSearch(e.target.value)
          }}
          type="text"
          placeholder="關鍵字搜尋"
        />
      </div>
    </>
  )
}

export default SearchInput
