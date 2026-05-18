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
import RegisterPage from "./Pages/RegisterPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

// Component - call

// Function - call
// CompA();
const isUserLoggedIn = false;

// const status = false;
// const ResultPage = status ? (
//   <h1>User Logged in</h1>
// ) : (
//   <h2>User Not Logged in</h2>
// );

const ResultPage = isUserLoggedIn ? <RegisterPage /> : <LoginPage />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CompA /> */}
    {/* <Form /> */}
    {/* <UserDashboard/> */}
    {/* <HomePage /> */}
    {/* <ContactPage /> */}
    {/* {ResultPage} */}
    {/* {isUserLoggedIn && <RegisterPage />} */}
    {/* {!isUserLoggedIn && <LoginPage />} */}
  </StrictMode>,
);

// React Portal : a root uses by react
