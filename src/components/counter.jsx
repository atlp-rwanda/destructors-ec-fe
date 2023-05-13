import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterSlice';

function Counter () {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1 className='text-2xl m-5 font-bold'>Counter {counter}</h1>
      <button
        className='p-5 m-5 bg-blue-500 rounded-circle'
        onClick={() => dispatch(increment())}>
        +
      </button>
      <button
        className='p-5 m-5 bg-orange-700 rounded-circle'
        onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default Counter;
