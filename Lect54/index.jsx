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
