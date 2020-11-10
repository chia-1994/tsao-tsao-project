import React, { useState, useEffect } from 'react'

import ControlledCarousel from '../components/course/ControlledCarousel'
import TopCourse from '../components/course/TopCourse'
import BodyCourse from '../components/course/BodyCourse'

import '../CourseList.css'

function CourseList() {
  const [mydata, setMydata] = useState([])
  const getData = async () => {
    const res = await fetch('http://localhost:3000/course/get-db', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const data = await res.json()

    setMydata(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ControlledCarousel />
      <TopCourse data={mydata.length ? mydata.slice(0, 4) : null} />
      <BodyCourse data={mydata.length ? mydata.slice(4, 11) : null} />
    </>
  )
}

export default CourseList
