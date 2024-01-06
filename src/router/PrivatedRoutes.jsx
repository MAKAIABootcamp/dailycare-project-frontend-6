import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivatedRoutes = ({
  isAuthenticated,
  redirectPath = "/sign-in",
  children,
}) => {
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return <>{children ? children : <Outlet />}</>;
};

export default PrivatedRoutes;