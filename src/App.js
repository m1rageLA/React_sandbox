import React from "react";
import Counter from "./components/Counter"
import CounterClass from "./components/CounterClass"

function App() {
  /*const [likes, setLikes] = useState(0);
  const [inputValue, setInputValue] = useState("NaN text");

  function incement() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  function decrement() {
    setLikes((prevLikes) => prevLikes - 1);
  }
*/
  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <CounterClass/>

      {/* <h1>{likes}</h1>
      <h1>{inputValue}</h1>
      <input  
          type="text" 
          value={inputValue}
          //двухстороннее связывание
          onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={inccrement}>Incement</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  );
}

export default App;
