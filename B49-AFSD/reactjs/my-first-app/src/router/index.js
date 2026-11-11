import { createBrowserRouter } from "react-router";

// Import Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Category from "../pages/Category";
import settings from "../pages/settings";
import ProfilePage from "../pages/ProfilePage";
import Backup from "../pages/Backup";
import AlbumsPage from "../pages/AlbumsPage";

// Import Loaders
import { getAllPhotos } from "../helper/loaders/albums";

// Import Action
import { CreateAlbums } from "../helper/actions/albumsAction";

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
  {
    path: "/albums/:id",
    Component: AlbumsPage,
    // loader: getAllPhotos,
    action: CreateAlbums,
  },
  //   {
  //     path: "/:category",
  //     Component: Category,
  //   },
]);

export default AppRouter;
