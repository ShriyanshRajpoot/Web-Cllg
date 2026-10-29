import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './features/counter/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
      dispatch(increment());
  }
  
  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResettClick() {
      dispatch(reset());
  }

  
  return (
   <div className='container'>
      <button className='button' onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button className='button' onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleResettClick}> Reset </button>
   </div>
  )
}

export default App
