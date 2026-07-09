import React from "react";

function Form() {
  // javascript - js, jsx(a.k.a xml (HTML))
  console.log("JS Ran..");

  const title = <h1>Hi everyone</h1>; // `${}` - string literal

  return (
    <div>
      <h1>List of users</h1>
      {title}
    </div>
  );
}

export default Form;

// XML(Dynamic - JSX) Vs HTML(Static) -
