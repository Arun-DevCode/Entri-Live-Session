import React from "react";
import ContextProvider from "./context/ContextProvider";
import Counter from "./components/Counter";

function Index() {
  return (
    <div>
      <h1>React Context</h1>
      <ContextProvider>
        <Counter />
      </ContextProvider>
    </div>
  );
}

export default Index;
