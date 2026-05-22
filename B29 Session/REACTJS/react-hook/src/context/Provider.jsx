import React, { useState } from "react";
import userContext from "./Context";
import Demo from "./demo";

export default function Provider(props) {
  const [user, setUser] = useState({
    name: "malathi",
    email: "malathidev@gmail.com",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
}
