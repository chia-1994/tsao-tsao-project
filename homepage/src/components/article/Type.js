import React, { useState } from 'react'
import './css/.css'
import SearchInput from './SearchInput'
function Type() {
  return (
    <>
      <div className="titlePart">
        <div className="title">
          <img src="./IMG/文章專欄.png" alt="圖片遺失" />
        </div>
        <SearchInput />
      </div>
    </>
  )
}

export default Type
