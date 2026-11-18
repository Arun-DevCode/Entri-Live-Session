import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Imports
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/index";
import { Provider } from "react-redux";
import store from "./stores/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>,
);  