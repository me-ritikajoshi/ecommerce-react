import React, { useReducer } from 'react'
import Memo from './Memo'


//define the initial state
const initialState = {
    count: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const DataCounter = () => {
    //useReducer returns the current state and dispatch the function
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h2>{state.count}</h2>
            <button className='btn btn-primary me-5' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button className='btn btn-primary' onClick={() => dispatch({ type: 'DECREMENT' })}>Deccrement</button>
            <Memo />
        </>
    )
}

export default DataCounter