import React from "react";

function FieldError(props) {
  const message = props.message;
  return <span className="text-red-500">{message}</span>;
}

export default FieldError;
