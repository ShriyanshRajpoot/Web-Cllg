import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  function handleInputChange(e) {
    console.log("Value till now:", e.target.value);
  }
  
  return (
    <div>
      
      <form>
        <input type="text" onChange={handleInputChange} />
      </form>


       {/* <button onClick={handleClick}>Click me</button> */}
    </div>
    
  )
}

export default App
