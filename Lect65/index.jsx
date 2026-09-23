function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);

  // using early return
  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  // using logical operator
  /* return(
    <div>
      {isLoggedIn && <LogoutBtn/>}
    </div>
  ) */


  // using ternary operator
  /* return(
    <div>
      {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  ) */


  // using loop
  /* if(isLoggedIn) {
    return (
      <LogoutBtn/>
    )
  }
  else{
    return(
      <LoginBtn/>
    )
  } */
  
  
}

export default App
