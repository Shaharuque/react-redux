//Counter component
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset,increamentByAmount } from './counterSlice';
import { useState } from 'react';
import React from 'react';

const Counter = () => {
    const count=useSelector((state)=>state.counter.count)     //Allows you to extract data from the Redux store state, using a selector function.
    const dispatch=useDispatch()                 //using useDispatch() action can be called to be performed

    const [incrementAmout,setIncrementAmount]=useState(0)
    const addValue=Number(incrementAmout) || 0; //incrementAmout jodi number type na hoy tahley addValue tey 0 jabey otherwise nothing

    const resetAll=()=>{
        setIncrementAmount(0) 
        dispatch(reset())
    }


    return (
        <div>
            <p>{count}</p>
            <div>
                 <button onClick={()=>dispatch(increment())}>+</button>  
                 <button onClick={()=>dispatch(decrement())}>-</button>
            </div>

            <input
                type='text'
                value={incrementAmout}
                onChange={( e)=>setIncrementAmount(e.target.value)}
            
            />
            <div>
                <button onClick={()=>dispatch(increamentByAmount(addValue))}>Add Amount</button>  {/*addValue will act as payload for increamentByAmount action and dispatch ar help a action call hocchey*/}
            </div>

            <div>
                <button onClick={()=>resetAll()}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;