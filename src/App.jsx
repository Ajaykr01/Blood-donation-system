import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import DonateBlood from "./components/DonateBlood";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/donate",
          element: <DonateBlood />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path:"/signup",
          element:<Signup />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
