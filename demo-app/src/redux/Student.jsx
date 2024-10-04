import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {
    const data=useSelector(store=>store.student)
    return (
      <>
      <h2>The name of the student is {data.student_name} </h2>
      </>
  )
}

export default Student