import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import SingleProduct from "./Components/SingleProduct";
import CartPage from "./Pages/CartPage";
import CheckOut from "./Pages/CheckOut";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/product/:id", element: <SingleProduct /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/checkout", element: <CheckOut /> }
      ],
    },
  ]);


  return (
      <RouterProvider router={router}>
        <div>Hero section</div>
      </RouterProvider>
  );
};

export default App;
