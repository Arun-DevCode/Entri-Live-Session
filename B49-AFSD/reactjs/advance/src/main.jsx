import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CounterPage from "./Pages/CounterPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <CounterPage/>
  </StrictMode>,
);
