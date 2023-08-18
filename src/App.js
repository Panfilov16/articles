import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(1);
  const [value, setValue] = useState("Пусто");

  function increment() {
      setLikes(likes + 1);
  }

  function decrement() {
      setLikes(likes - 1);
  }

  return (
   
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
