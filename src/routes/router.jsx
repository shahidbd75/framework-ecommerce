import { createBrowserRouter } from "react-router";
import Layout from "../storefront/components/Layout";
import Home from "../storefront/pages/Home/Home";
import Products from "../storefront/pages/Products/Products";
import ProductDetail from "../storefront/pages/ProductDetail/ProductDetail";
import NotFound from "../shared/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home},
      { path: 'products', Component: Products },
      { path: 'product/:id', Component: ProductDetail },
    ],
  },
  {
    path: "admin",
    element: <div>Admin</div>
  },
  {
    path: "*",
    Component: NotFound 
  }
]);
