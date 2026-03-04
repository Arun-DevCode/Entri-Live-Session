import { createBrowserRouter } from "react-router";

// Import Route Pages
import LoginScreen from "../Pages/LoginScreen";
import RegisterScreen from "../Pages/RegisterScreen";

// Router setup
const AppRouter = createBrowserRouter([
  {
    path: "/",
    Component: LoginScreen,
  },
  {
    path: "/sign-up",
    Component: RegisterScreen,
  },
  {
    path: "/dashboard",
    element: <h1>User Dashboard</h1>,
  },
]);

export default AppRouter;
