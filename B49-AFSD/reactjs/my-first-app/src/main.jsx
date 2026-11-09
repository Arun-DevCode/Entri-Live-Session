import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AppRouter from "./router";

// React Element
// const TitleElement = React.createElement(
//   "h1",
//   null,
//   "Welcome to Home"
// );

// console.log(TitleElement);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
);
