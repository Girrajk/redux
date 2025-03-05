import React from 'react'
import "./Counter.css"
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, reset } from "../redux/action/action"

const Counter = () => {
    const count = useSelector((state) => state.countReducer);
    const dispatch = useDispatch();
    return (
        <div className='counter-box'>
            <h1>Counter Application</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increase())}>Incr</button>
            <button onClick={() => dispatch(decrease())}>Decr</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
export default Counter