import React from "react";

export default function compB(props) {
  const user = props.user;
  return (
    <>
      <h1>Child Component</h1>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    </>
  );
}
