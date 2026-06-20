import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";

import AppStore from "./store/AppStore.jsx";
import Profile from "./pages/Profile.jsx";
import CreateProfileForm from "./components/CreateProfileForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <CreateProfileForm />
      <Profile />
    </Provider>
  </StrictMode>,
);
