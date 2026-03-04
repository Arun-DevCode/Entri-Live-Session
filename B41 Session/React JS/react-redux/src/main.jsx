import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter.jsx";
import { Provider } from "react-redux";
import AppStore from "./store/AppStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <Counter />
    </Provider>
  </StrictMode>,
);
