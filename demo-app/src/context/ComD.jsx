import React,{useContext} from 'react'
import { GlobalContext } from './GlobalValue'

const ComD = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <h2>The name of the student is {data.name} </h2>
    <h2>Address: {data.address}</h2>
    </>
  )
}

export default ComD