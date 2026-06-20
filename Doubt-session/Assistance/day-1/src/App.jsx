import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0); // StateVariable and setter function

  function updateCount() {
    console.log("Function is called!");
    setCount(12)
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={updateCount}>Update</button>
    </>
  );
}
