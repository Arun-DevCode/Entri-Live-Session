import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import RemoteToysPage from "../pages/RemoteToysPage";
import ErrorRouteComponent from "../pages/ErrorRouteComponent";
import UserInformation from "../pages/UserInformation";
import ElectronicsProduct from "../pages/ElectronicsProduct";

import { getProductByNameOrCategory } from "../api/Products";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },

  {
    path: "/product",
    Component: ProductPage,
    children: [
      {
        index: true,
        element: <h2>Select a Product Category</h2>,
      },
      {
        path: "mobile",
        element: <h1>Mobile Product</h1>,
      },
      {
        path: "remote-control-toys",
        Component: RemoteToysPage,
      },
    ],
  },

  {
    path: "/caddle-toes-rock-car-spring-wheels",
    element: <h1>Welcome to Caddle Toes Rock Car Spring Wheels Product</h1>,
  },

  {
    path: "/cart",
    Component: CartPage,
  },

  {
    path: "/electronics",
    Component: ElectronicsProduct,
    loader: getProductByNameOrCategory,
  },

  {
    path: "/users",
    element: <h1>User List Page</h1>,
  },

  {
    path: "/users/:userId",
    Component: UserInformation,
  },

  {
    path: "*",
    Component: ErrorRouteComponent,
  },
]);

export default AppRouter;
