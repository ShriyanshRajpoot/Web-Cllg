import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


// step1: create context
// const UserContext = createContext();

// step2: wrap all the child inside a provider
// set3: pass value
// step4: consumer ke andar jaake consume karlo

const ThemeContext = createContext();

function App() {
  //const [user, setUser] = useState({name:"Love"});
  const [theme, setTheme] = useState('light');
  
  return (
  <>
    <ThemeContext.Provider value={{theme,setTheme}}>

      <div id='container' style={{backgroundColor:theme==='light'?"white":"black"}}>
        <ChildA />
      </div>

    </ThemeContext.Provider>

    







    {/* <>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </> */}
    </>
  )
}

export default App
//export {UserContext}
export {ThemeContext}
