import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

const UnProtectedRoute = () => {
  const { token } = useAuth();
  // Check if the user is authenticated
  if (token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default UnProtectedRoute;