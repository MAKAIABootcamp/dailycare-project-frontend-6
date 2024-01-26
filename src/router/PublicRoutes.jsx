import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, redirectPath = "/home", role,  children }) => {
  console.log(role)
  if (isAuthenticated) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PublicRoutes;