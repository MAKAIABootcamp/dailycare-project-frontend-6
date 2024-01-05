import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PrivatedRoutes = ({
  isAuthenticated,
  redirectPath = "/sign-in",
  children,
}) => {
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return (
    <div style={{ marginBottom: "70px" }}>
      {children ? children : <Outlet />}
      <Footer />
    </div>
  );
};

export default PrivatedRoutes;
