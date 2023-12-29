import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { IoNotificationsOutline } from "react-icons/io5";
import "./styles.sass";
import { useNavigate } from "react-router-dom";

const DrawerAntD = () => {

  const navigate = useNavigate()

  const goTo = () => navigate('/reminders-view');
  
  const goTo1 = () => navigate('/welcome')

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="buttons-container">
          <div className="buttons-container__main-btns">
            <button className="buttons-container__main-btns--btn-styles">
                <span className="span-btn">
                    <label onClick={() => goTo()} htmlFor="notification-style" className="icon">
                        <IoNotificationsOutline />
                    </label>
                    Notificaciones
                </span>
            </button>
            <button className="buttons-container__main-btns--btn-styles">
                <span onClick={() => goTo()} className="span-btn">
                    <label htmlFor="notification-style" className="icon">
                        <IoNotificationsOutline />
                    </label>
                    Recordatorios
                </span>
            </button>
            <button className="buttons-container__main-btns--btn-styles">
                <span className="span-btn">
                    <label htmlFor="notification-style" className="icon">
                        <IoNotificationsOutline />
                    </label>
                    Política de privacidad
                </span>
            </button>
          </div>
          <button className="buttons-container__logout" onClick={() => goTo1()}></button>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerAntD;
