import React, { useState } from "react";
import counterContext from "./CounterContext";

function ContextProvider({ children }) {
  const [count, setCount] = useState(2);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}

export default ContextProvider;
