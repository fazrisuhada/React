import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
//   let [counter2, setCounter2] = useState(0);


  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div style={{marginTop:"10px"}}>
      <button onClick={handleClick}>Increment</button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
