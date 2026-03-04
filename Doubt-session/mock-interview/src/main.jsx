import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import Product from "./Components/Layout/product.jsx";
import Search from "./Components/Search.jsx";
createRoot(document.getElementById("root")).render(<Product />);
