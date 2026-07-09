import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Products from "./pages/products";
import RegisterPage from "./pages/RegisterPage"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Products /> */}
    <RegisterPage />
  </StrictMode>,
);
