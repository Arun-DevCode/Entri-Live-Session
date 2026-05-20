import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    console.log("Button Clicked");
    setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    console.log("Button Clicked");

    // Count > 0 -> Decrement , count is 0 -> no update
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      console.log("Please increment first then do decrement!");
    }
  }

  function Reset() {
    console.log("Button Clicked");
    setCount((prevCount) => prevCount);
  }

  console.log("Count Value:", count);
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}> -</button>
        <button onClick={Reset}>reset</button>
      </div>
    </>
  );
}
