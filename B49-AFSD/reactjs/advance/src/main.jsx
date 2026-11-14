import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import CounterPage from "./Pages/CounterPage.jsx";
import { RouterProvider } from "react-router";
import {AppRouter} from "./router/index";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={AppRouter}/>
  </StrictMode>,
);
