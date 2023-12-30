import React, { useState } from "react";
import { Modal } from "antd";
import { FaRegBell } from "react-icons/fa6";
import { Switch } from 'antd';

const NotificationsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={showModal} className="buttons-container__main-btns--btn-styles">
        <span className="span-btn">
          <label htmlFor="notification-style" className="icon">
            <FaRegBell />
          </label>
          Notificaciones
        </span>
      </button>
      <Modal
        title={
        <span className="span-modal-title">
            <label htmlFor="icon-modal-notification" className="icon">
                <FaRegBell />
            </label>
            <h1 className="span-modal-title--text">Notificaciones</h1>
        </span>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
            hidden: true,
        }}
        cancelButtonProps={{
            hidden: true,
        }}
      >
        <hr className="hr-title"/>
        <div className="notifications-config">
            <span className="notifications-config__span">
                <p>Recomendaciones</p>
                <Switch defaultChecked />
            </span>
            <hr className="notifications-config--hr"/>
            <span className="notifications-config__span">
                <p>Mensajes motivacionales</p>
                <Switch defaultChecked />
            </span>
            <hr className="notifications-config--hr"/>
            <span className="notifications-config__span">
                <p>Recordatorios</p>
                <Switch defaultChecked />
            </span>
        </div>
      </Modal>
    </>
  );
};
export default NotificationsModal;
