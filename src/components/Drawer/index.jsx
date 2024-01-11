import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import NotificationsModal from "../NotificationsModal";
import { logoutAsync } from "../../store/users/userThunks";
import { Drawer } from "antd";
import { FaRegClock } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import "./styles.sass";
import { useIsLoginScreen } from "../../context/loginScreenContext";

const DrawerAntD = () => {
  const { setLoginScreen } = useIsLoginScreen();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goTo = () => navigate("/reminders-view");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const Logout = () => {
    dispatch(logoutAsync());
    navigate("/welcome");
    setLoginScreen(true);
  };
  return (
    <>
      <div className="menuContainer" onClick={showDrawer}>
        <img src="src/assets/icons/menu.svg" alt="Hamburger Menu" />
      </div>
      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="buttons-container">
          <div className="buttons-container__main-btns">
            <NotificationsModal />
            <button
              className="buttons-container__main-btns--btn-styles"
              onClick={() => goTo()}
            >
              <span className="span-btn">
                <label htmlFor="notification-style" className="icon">
                  <FaRegClock />
                </label>
                Recordatorios
              </span>
            </button>
            <button className="buttons-container__main-btns--btn-styles">
              <span className="span-btn">
                <label htmlFor="notification-style" className="icon-privacy">
                  <LuShieldCheck />
                </label>
                Política de privacidad
              </span>
            </button>
          </div>
          <button className="buttons-container__logout" onClick={Logout}>
            Cerrar sesión
          </button>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerAntD;
