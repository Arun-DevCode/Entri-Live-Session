import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router";
// import Router from "./routes/routes";
// import Notification from "./components/Notification";
import ProductCard from "./components/ProductCard";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={Router} /> */}
    <ProductCard />
  </StrictMode>
);
