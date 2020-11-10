function Introduction() {
  // const [ScrollY, setScrollY] = useState()
  // useEffect(() => {
  //   const fix = document.querySelector('#fix')
  //   // window.scrollY
  //   const newY = () => {
  //     setScrollY(window.scrollY)
  //     if (ScrollY < 110) {
  //       fix.style.cssText = '  position:static;'
  //     } else if (ScrollY >= 110) {
  //       fix.style.cssText = '  position:sticky;top:70px;'
  //     } else if (ScrollY >= 3000) {
  //       fix.style.cssText = 'static'
  //     }
  //   }
  //   window.addEventListener('scroll', newY)
  //   return (
  //     () => {
  //       window.removeEventListener('scroll', ScrollY)
  //     },
  //     []
  //   )
  // })
  return (
    <>
      <div class="Introduction" id="Introduction">
        <div id="fix">
          <div class="title-top" id="title-top">
            <h2 class="product-title">
              {' '}
              竹萃洗髮精 <span class="ml">250ml</span>
            </h2>
            <div class="star-top">
              <div>250 reviews</div>
              <img src="http://localhost:3001/SVG/star-empty.svg" alt="" />
              <img src="http://localhost:3001/SVG/star-empty.svg" alt="" />
              <img src="http://localhost:3001/SVG/star-empty.svg" alt="" />
            </div>
          </div>
          <p class="article" id="article">
            一瓶更貼近自然的無水卸妝油順其自然卸妝油順應「以油溶妝」的
            卸妝原理,有效溶解殘妝與毛孔髒污,做到充分的卸妝力。在有效溶解
            彩妝髒污的同時,為肌膚留下原生的保護屏障,卸後不乾澀、不緊繃,
            維持肌膚原應有的透亮感,與自然潤澤的膚。以獨家高比例橄欖來源油
            、燕麥仁油、白芒花籽油
          </p>
          <div class="fi" id="fi">
            <div class="th-ic" id="th-ic">
              <img src="http://localhost:3001/icon/know-more-2.png" alt="" />
              <img src="http://localhost:3001/icon/know-more-1.png" alt="" />
              <img src="http://localhost:3001/icon/know-more-3.png" alt="" />
            </div>
            <h3 class="price">NT 500</h3>
            <div class="count">
              <select name="" id="" class="sel">
                <option value="1">數量</option>
              </select>
              <div class="add-shop">加入購物車</div>
            </div>
            <h2 class="ar-title">相關文章</h2>
            <ul>
              <ol> 1. 不怕「秋老⻁」!入秋保養這樣做!</ol>
              <ol> 2. 洗面乳這樣用可能都太多!肌膚斷捨離練習</ol>
              <ol> 3. 洗面乳這樣用可能都太多!肌膚斷捨離練習</ol>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Introduction
