import { useParams } from 'react-router-dom'

function TopCourseDetail(props) {
  let { id } = useParams()
  const { data } = props
  console.log(id, data)
  // let display = data
  const myData = id && data && data[id - 1]
  return myData ? (
    <>
      <div class="top-100"></div>

      <div class="top-course01">
        <img
          src={'http://localhost:3001/IMG/CourseDetail/' + myData.pic_title}
          alt=""
        />
        <h1 class="top-course01-h1">{myData.title}</h1>
        <h3 class="top-course01-h3">{myData.sub_title}</h3>
      </div>
    </>
  ) : (
    ''
  )
}

export default TopCourseDetail
