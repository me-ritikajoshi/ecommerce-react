import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
    const[name,setName]=useState('')
    const dispatch=useDispatch()

    const change=()=>(
        dispatch({type:'CHANGE_NAME',payload:name})

    )
  return (
    <>
    <div className="d-flex justify-content-center">
        <div className="col-md-5">
            <input type='text' placeholder='Type Name'className='form-control' onChange={e=>setName(e.target.value)}/>
            <button className='btn btn-warning' onClick={change}>Change</button>
        </div>
    </div>

    
    </>
  )
}

export default Form