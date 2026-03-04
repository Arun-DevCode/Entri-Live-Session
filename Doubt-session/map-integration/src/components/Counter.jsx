import counterContext from "@/context/CounterContext";
import React, { useContext } from "react";

function Counter() {
  const { count, setCount } = useContext(counterContext); //static
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
