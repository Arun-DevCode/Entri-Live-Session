import React from "react";

export default function Profile() {
  //   const state = React.useState("Hello"); // assign
  //   console.log(state[1]);

  const [numbers, setNumbers] = React.useState("Everyone"); // [[56],f]

  //   setNumbers("Hello");
  function updateValue() {
    setNumbers("Hello");
  }

  console.log(numbers);
  return (
    <div>
      <p>{numbers}</p>
      <h1>Welcome to Profile Pages</h1>
      <button onClick={updateValue}>Update Value</button>
    </div>
  );
}
