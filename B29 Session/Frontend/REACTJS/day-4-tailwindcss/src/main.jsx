import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";

import ReviewPage from "./pages/ReviewPage.jsx";
import UserPage from "./pages/UserPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ProductPage /> */}
    {/* <ReviewPage /> */}
    <UserPage />
  </StrictMode>,
);
