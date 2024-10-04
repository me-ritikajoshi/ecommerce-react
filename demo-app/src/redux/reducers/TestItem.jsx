import React from 'react'
import { useDispatch } from 'react-redux'

const TestItem = () => {
    const dispatch=useDispatch()

    const addItem=()=>(
        dispatch({type:'ADD_TO_CART'})
    )
    const removeItem=()=>(
        dispatch({type:'REMOVE_FROM_CART'})
    )
  return (
    <>
    <div className="container">
        <div className="d-flex justify-content-center my-2">
            <button className='btn btn-primary'onClick={addItem}>Add</button>
            &nbsp; &nbsp;
            <button className='btn btn-danger'onClick={removeItem}>Remove</button>

        </div>
    </div>
    
    </>
  )
}

export default TestItem