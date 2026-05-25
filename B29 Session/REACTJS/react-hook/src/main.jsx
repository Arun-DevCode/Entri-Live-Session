import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Profile from "./context/Profile.jsx";
import Counter from "./Counter.jsx";
import Products from "./Products.jsx";
import CompA from "./compA.jsx";
import Provider from "./context/Provider.jsx";
import UserA from "./context/userA.jsx";
import UserB from "./context/userB.jsx";
import Demo from "./context/demo.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import PostPage from "./pages/PostPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Profile /> */}
    {/* <Counter /> */}
    {/* <Products /> */}
    {/* <CompA /> */}
    {/* <Provider>
      <UserA />
      <UserB />
      <Demo />
      <Profile />
    </Provider> */}

    {/* <UsersPage /> */}
    <PostPage />
  </StrictMode>,
);
