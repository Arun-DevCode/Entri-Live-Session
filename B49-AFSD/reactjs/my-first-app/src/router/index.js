import { createBrowserRouter } from "react-router";

// Import Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Category from "../pages/Category";
import settings from "../pages/settings";
import ProfilePage from "../pages/ProfilePage";
import Backup from "../pages/Backup";

//* App Router Config
const AppRouter = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },

  {
    path: "/settings",
    Component: settings,
    children: [
      {
        path: "/settings/profile",
        Component: ProfilePage,
      },
      {
        path: "/settings/backup",
        Component: Backup,
      },
    ],
  },
  //   {
  //     path: "/:category",
  //     Component: Category,
  //   },
]);

export default AppRouter;
