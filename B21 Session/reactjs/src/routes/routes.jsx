import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import TestProductPage from "../pages/TestProductPage";
import Dashboard from "../pages/Dashboard";
import AssessmentPage from "../pages/AssessmentPage";
import OverviewPage from "../pages/OverviewPage";
import ProfilePage from "../pages/ProfilePage";

// App Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "product",
    Component: TestProductPage,
    errorElement: <NotFoundPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "assessment",
        Component: AssessmentPage,
        errorElement: <NotFoundPage />,
      },
      {
        path: "overview",
        Component: OverviewPage,
        errorElement: <NotFoundPage />,
      },
      {
        path: "profile",
        Component: ProfilePage,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
