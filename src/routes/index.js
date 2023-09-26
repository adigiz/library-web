import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UnProtectedRoute from "./UnProtectedRoute";

import Login from "pages/login";
import Home from "pages/home";
import BookDetail from "pages/book-detail";
import Register from "pages/register";


const Routes = () => {
  // Define routes accessible only to authenticated users
  const routes = [
    {
      path: "/",
      element: <ProtectedRoute />, //RouteGuard
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books/:slug",
          element: <BookDetail />,
        },
      ],
    },
    {
      path: "/",
      element: <UnProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ];


  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([...routes]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
