function App() {
  const [count, setCount] = useState(0);
  const [countTotal, setCountTotal] = useState(0);

  // first -> side-effect function
  // second -> clean-up function
  // third -> comma separated dependency list

  // variation:1
  // runs on every render
  /* useEffect(() => {
    alert("I will run on each render") ;  
  }) */

  // variation: 2
  // that runs on only first render
  /* useEffect(() => {
    alert("I will run on only first render");
  }, []) */

  // variation: 3
  /* useEffect(() => {
    alert("I will run when the count changes")
  }, [count]) */
 
  // variation: 4
  // multiple dependencies
  useEffect(() => {
    alert("Count changed");
  }, [count]);

  useEffect(() => {
    alert("Total Count changed");
  }, [countTotal]);
  
  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTotal() {
    setCountTotal(countTotal + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
      <br />
      Count is: {count}

      <br /><br />

      <button onClick={handleClickTotal}>Increase Total Count</button>
      <br />
      Total Count is: {countTotal}
    </div>
  );
}

export default App;
