import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";

import App from "./App";

// React Element
// const TitleElement = React.createElement(
//   "h1",
//   null,
//   "Welcome to Home"
// );

// console.log(TitleElement);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
