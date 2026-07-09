import React from "react";
import CompB from "./compB";

export default function compA() {
  const isSafe = true;

  const user = null

  return (
    <>
      <div>{isSafe && <h1>All of them is secure</h1>}</div>

      <CompB user={user} />
    </>
  );
}
