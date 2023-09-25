import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Redux/Counter';


const Counting = () => {
    const count = useSelector((state)=>state.Counter.count)
    const dispatch =  useDispatch()
  return (
    <div>
      <h1 className='text-center'>value {count}</h1>
      <div>
        <button onClick={()=>dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(decrement())}>Increase</button>
        <button onClick={()=>dispatch(incrementByAmount(20))}>Increase by 20</button>
      </div>
    </div>
  );
}
export default Counting;
