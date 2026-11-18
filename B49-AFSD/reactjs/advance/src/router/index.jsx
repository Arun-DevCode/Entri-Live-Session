import { createBrowserRouter } from "react-router";

// Import Pages
import SignUpPage from "../Pages/SignUp";
import ProductPage from "../Pages/ProductPage";

// Router config
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    Component: SignUpPage,
  },
  {
    path: "/products",
    Component: ProductPage,
    errorElement: <h1>Something went to wrong</h1>,
  },
]);
