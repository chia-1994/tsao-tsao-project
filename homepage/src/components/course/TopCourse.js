import { useHistory } from 'react-router-dom'

function TopCourse(props) {
  let history = useHistory()
  const { data } = props
  let display = ''
  display =
    data &&
    data.map((v, i) => {
      return (
        <div class="up-left" key={i}>
          <div class="up-left-in">
            <div class="up-left-in-left">
              <img
                src={'http://localhost:3001/IMG/CourseList/' + v.pic_big}
                alt=""
              />
            </div>
            <div class="up-left-in-right">
              <h3>{v.title}</h3>
              <h4 class="up-left-in-right-h4">{v.sub_title}</h4>
              <button
                class="up-button"
                onClick={() => {
                  history.push(`/CourseDetail/${v.sid}`)
                }}
              >
                <h3 class="up-button-h3">活動介紹</h3>
              </button>
            </div>
          </div>
          {/* <div class="up-bottom"></div> */}
        </div>
      )
    })
  return (
    <>
      <div class="top-100"></div>

      <div class="top-title">
        <div class="top-title-in">
          <h3 class="top-title-in-h3">
            人類對環境的傷害往往來自於漠視與無感。因此面對現今的環境問題，
            最終仍須回到與「人」的溝通。
            <br />
            艸艸相信，理解與使用友善環境的產品，是一股溫柔且深耕的力量，
            可以觸動人心，溝通彼此，轉變價值觀並鼓勵環境行動的實踐。
          </h3>
        </div>
      </div>
      <div>{display}</div>
    </>
  )
}

export default TopCourse
