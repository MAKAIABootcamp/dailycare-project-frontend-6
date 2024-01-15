import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const PrivatedRoutes = ({
  isAuthenticated,
  redirectPath = "/welcome",
  children,
}) => {
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return (
    //No borrar :)
    <div style={{ marginBottom: "70px" }}>
      {children ? children : <Outlet />}
      <Footer />
    </div>
  );
};

export default PrivatedRoutes;
PrivatedRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
