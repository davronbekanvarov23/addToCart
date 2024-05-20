import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

// loaders
import { loader as HomeLoader } from "./pages/Home";
import { loader as ProductLoader } from "./pages/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:id",
          element: <Product />,
          loader: ProductLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
