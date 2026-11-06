import React from "react";

export default function ErrorDisplay({ errorMessage }) {
  return (
    <>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </>
  );
}
