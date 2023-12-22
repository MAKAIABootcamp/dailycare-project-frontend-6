import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaRegClock } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import NotificationsModal from "../NotificationsModal";
import "./styles.sass";

const DrawerAntD = () => {
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
            <NotificationsModal />
            <button className="buttons-container__main-btns--btn-styles">
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
          <button className="buttons-container__logout">
            Cerrar sesión
          </button>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerAntD;
