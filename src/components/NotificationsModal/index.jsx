import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotificationCheck } from "../../store/users/userSlice";
import { getUserFromCollection, updateNotificationCheck } from "../../services/userServices";
import { Modal, Switch } from "antd";
import { FaRegBell } from "react-icons/fa6";

const NotificationsModal = () => {
  const { user, notificationCheck } = useSelector(store => store.user)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkedNotifications, setCheckedNotifications] = useState(notificationCheck)
  const [checkedAlerts, setCheckedAlerts] = useState(false)
  const dispatch = useDispatch()
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSwitchNotifications = async () => {
    setCheckedNotifications(!checkedNotifications)
    dispatch(setNotificationCheck(!checkedNotifications))
    await updateNotificationCheck(user.id, !checkedNotifications)
  }
  const handleSwitchAlerts = () => {
    setCheckedAlerts(!checkedAlerts)
    // console.log(checkedAlerts);
  }
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
                <Switch checked={checkedNotifications} onClick={handleSwitchNotifications} />
            </span>
            <hr className="notifications-config--hr"/>
            <span className="notifications-config__span">
                <p>Alertas: Mis metas</p>
                <Switch checked={!checkedAlerts}  onClick={handleSwitchAlerts}/>
            </span>
        </div>
      </Modal>
    </>
  );
};
export default NotificationsModal;
