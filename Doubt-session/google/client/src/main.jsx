import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Imports
import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.jsx";
import { Provider } from "react-redux";
import AppStore from "./store/store.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>,
);
