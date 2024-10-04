import React,{useState,useMemo} from 'react'

const Memo = () => {
    const[count,setCount]=useState(5)

    const squareFunc=useMemo(()=>{
        return count*count
    },[count])

  return (
    <>
    <div className="d-flex justify-content-center">
        <div className="col-md-5">
            <h1>{count} and its square is {squareFunc}</h1>
            <button className='btn btn-success' onClick={()=>setCount(count+2)}>Increase</button>
        </div>
    </div>
    </>
  )
}

export default Memo