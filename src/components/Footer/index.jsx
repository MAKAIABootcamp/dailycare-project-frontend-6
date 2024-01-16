import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "../../assets/icons/HomeIcon";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import { ToastContainer } from "react-toastify";
import "./styles.sass";

const Footer = () => {
  const { pathname } = useLocation();
  const { notificationCheck } = useSelector( (store) => store.user )
  return (
    <nav className="footer">
      {notificationCheck ? <ToastContainer/> : ''}
      <Link to="/">
        <div className="option flex flex-col justify-center items-center gap-1">
          <HomeIcon active={pathname === "/"} />
          <span style={{ color: pathname === "/" ? "#4E7949" : "#A5A5A5" }}>
            Inicio
          </span>
        </div>
      </Link>
      <Link to="/activity">
        <div className="option flex flex-col justify-center items-center gap-1">
          <ActivityIcon active={pathname === "/activity"} />
          <span
            style={{ color: pathname === "/activity" ? "#4E7949" : "#A5A5A5" }}
          >
            Actividad
          </span>
        </div>
      </Link>
      <Link to="/user-profile">
        <div className="option flex flex-col justify-center items-center gap-1">
          <ProfileIcon active={pathname === "/user-profile"} />
          <span
            style={{
              color: pathname === "/user-profile" ? "#4E7949" : "#A5A5A5",
            }}
          >
            Perfil
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Footer;
