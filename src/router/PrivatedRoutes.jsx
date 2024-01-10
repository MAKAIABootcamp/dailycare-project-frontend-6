import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivatedRoutes = ({
  isAuthenticated,
  redirectPath = "/welcome",
  children,
}) => {
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PrivatedRoutes;