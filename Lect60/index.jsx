import UserCard from "./components/UserCard" 
function App() {
  return (
    <div className="container">
      <UserCard style={{"border-radius":"20px"}}/>
      <UserCard style={{"border-radius":"20px"}}/>
      <UserCard style={{"border-radius":"20px"}}/>
    </div>
  )
}

export default App
