import { useNavigate } from "react-router";
import React, { useState } from 'react';
import { Input } from 'antd';
import { Drawer } from "antd";
import { FaChevronLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { FaTrashAlt } from 'react-icons/fa';
import { TbReload } from "react-icons/tb";
import { TbClockPlus } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { Dropdown, Space } from 'antd';
import {
  CategoriesPicker,
  DatePickerAntD,
  DatePickerPeriod,
} from "../../components/DatePicker";
import wallpaper from "../../assets/images/wallpaper-3.png";
import "./styles.sass";

const { TextArea } = Input;

const RemindersEdit = () => {

  const items = [
    {
      label: <span className="FaTrashAlt"><FaTrashAlt /> Eliminar</span>,
      key: '0',
    },
   
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  const navigate = useNavigate()

  const goToRemindersView = () => navigate('/reminders-view')

  return (
    <main className="reminder-edit">
      <button className="reminder-edit__back-button m-3" onClick={() => goTo()}>
        <FaChevronLeft />
      </button>
      <Dropdown
        menu={
          {items,}
        }
        trigger={['click']}
      >
        <button className="reminder-edit__fi-more">
          <FiMoreVertical />
        </button>
      </Dropdown>
      <div className="reminder-title">
        <Input placeholder="Nombre actividad" bordered={false} />
      </div>
      <div className="reminder-edit__info-time">
        <div className="reminder-edit__info-time__frequency">
          <span className="reminder-edit__info-time__frequency__title">
            <label htmlFor="icon-modal-notification" className="icon">
              <TbReload />
            </label>
            <h1 className="reminder-detail__info-time__frequency__title--text">
              Frecuencia
            </h1>
          </span>
          <DatePickerAntD />
        </div>
        <div className="reminder-edit__info-time__frequency">
          <span className="reminder-edit__info-time__frequency__title">
            <label htmlFor="icon-modal-notification" className="icon">
              <TbClockPlus />
            </label>
            <h1 className="reminder-edit__info-time__frequency__title--text">
              Hora
            </h1>
          </span>
        </div>
        <div className="reminder-edit__info-time__hour">
          <Input placeholder="H" bordered={false} />
          <p className="points">:</p>
          <Input
            placeholder="M"
            bordered={false}
            style={{ marginRight: "10px" }}
          />
          <DatePickerPeriod />
        </div>
      </div>
      <div className="reminder-edit__description-section">
        <section className="sign-in user-profile">
          <section className="sign-in__wallpaper-container">
            <img src={wallpaper} alt="background wallpaper" objectfit:cover />
          </section>
          <section className="reminder-edit__description-section__content">
            <h1 className="reminder-edit__description-section__content--title">
              Descripción
            </h1>
            <div className="reminder-edit__description-section__content--text-area">
              <TextArea
                placeholder="¡Recuerda que tienes esta actividad pendiente!"
                autoSize={{
                  minRows: 2,
                  maxRows: 6,
                }}
                bordered={false}
              />
            </div>
            <div className="reminder-edit__info-time__frequency">
              <span className="reminder-edit__info-time__frequency__title">
                <label htmlFor="icon-modal-notification" className="icon">
                  <BiCategoryAlt />
                </label>
                <h1
                  className="reminder-edit__info-time__frequency__title--text"
                  id="category-title"
                >
                  Categorías
                </h1>
              </span>
            </div>
            <div className="reminder-edit__description-section__content--category">
              <CategoriesPicker />
            </div>
            {/* <Drawer
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="buttons-container-trash">
          <div className="buttons-container-trash__main-btns">
            <button className="buttons-container-trash__main-btns--btn-styles" onClick={() => goTo()} >
                <span className="span-btn">
                    <label htmlFor="notification-style" className="icon">
                        <FaTrashAlt />
                    </label>
                    Eliminar recordatorio
                </span>
            </button>
          </div>
        </div>
      </Drawer> */}
          </section>
        </section>
      </div>
    </main>
  );
};

export default RemindersEdit;