import React, { useState } from "react";
import { Modal } from "antd";
import { FaRegBell } from "react-icons/fa6";
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
        title="Basic Modal"
        open={isModalOpen}
      >
        <span>
            <hr className="hr-title"/>
        </span>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default NotificationsModal;
