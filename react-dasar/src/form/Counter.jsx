import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  let [data, setData] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  function handleClickPlus3() {
    setData((e) => e + 1);
    setData((e) => e + 1);
    setData((e) => e + 1);
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <button onClick={handleClick}>Increment</button>
        <h1>Counter : {counter}</h1>
      </div>
      <div>
        <button onClick={handleClickPlus3}>Counter + 3</button>
        <h1>Counter : {data}</h1>
      </div>
    </div>
  );
}
