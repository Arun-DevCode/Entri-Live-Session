import { createBrowserRouter } from "react-router";

// Import Pages
import RegisterPage from "../pages/RegisterPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import AdminDashboard from "../pages/AdminDashboard";
import PostPage from "../pages/PostPage";
import ViewPost from "../pages/ViewPost";
import Products from "../pages/Products";
import UsersPage from "../pages/users";

// Import function : Loader
import { fetchUsers } from "../api/users";

// Router Config
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/sign-up",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard/overview",
        element: <h1>Welcome to Overview - Dashboard</h1>,
      },
    ],
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  {
    path: "/post/:postId",
    element: <ViewPost />,
  },
  {
    path: "products",
    element: <Products />,
  },

  {
    path: "/user",
    element: <UsersPage />,
    loader: fetchUsers,
  },
]);

export default AppRouter;
