import { createBrowserRouter } from "react-router";
import Layout from "../storefront/components/Layout";
import Home from "../storefront/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home},
    ],
  },
  {
    path: "admin",
    element: <div>Admin</div>
  },
]);
