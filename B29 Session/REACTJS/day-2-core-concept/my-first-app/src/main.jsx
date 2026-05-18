import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Imports
import CompA from "./compA.jsx";
import Form from "./Form.jsx";
import UserDashboard from "./UserDashboard.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

// Component - call

// Function - call
// CompA();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CompA /> */}
    {/* <Form /> */}
    {/* <UserDashboard/> */}
    {/* <HomePage /> */}
    <ContactPage />
  </StrictMode>,
);

// React Portal : a root uses by react
