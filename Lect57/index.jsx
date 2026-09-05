import { useState, useEffect, useRef } from 'react'

function App() {
    const [count, setCount] = useState(0);
    let val = useRef(0);
    let btnRef = useRef();

    function handleIncrement() {
      val.current = val.current + 1;
      console.log("Value of val: ", val.current);
      setCount(count+1);
    }

    // it runs on every render
    useEffect(() => {
      console.log("main firse render hogya hu")
    })

    function changeColour() {
      btnRef.current.style.backgroundColor = "blue";
    }

  return (
   <div>

    <button ref={btnRef} onClick={handleIncrement}>Increment</button>
    <br />
<br />
    <button onClick={changeColour}>Change colour of 1st button</button>
    <br />
<br />
    <div>
      Count: {count}
    </div>

   </div>
  
  )
}

export default App
