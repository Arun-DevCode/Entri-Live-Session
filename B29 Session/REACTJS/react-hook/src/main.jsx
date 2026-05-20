import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import Counter from "./Counter.jsx";
import Products from "./Products.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Profile /> */}
    {/* <Counter /> */}
    <Products />
  </StrictMode>,
);
