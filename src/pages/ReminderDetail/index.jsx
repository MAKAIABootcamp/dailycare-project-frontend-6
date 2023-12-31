import { useNavigate } from "react-router";
import { Input } from "antd";
import { FaChevronLeft } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { TbClockPlus } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import wallpaper from "../../assets/images/wallpaper-4.png";
import {
  CategoriesPicker,
  DatePickerAntD,
  DatePickerPeriod,
} from "../../components/DatePicker";
import "./styles.sass";

const { TextArea } = Input;

const ReminderDetail = () => {

  const navigate = useNavigate()

  const goTo = () => navigate('/reminders-view')

  return (
    <main className="reminder-detail">
      <button className="reminder-detail__back-button m-3" onClick={() => goTo()}>
        <FaChevronLeft />
      </button>
      <div className="reminder-title">
        <Input placeholder="Añade un título" bordered={false} />
      </div>
      <div className="reminder-detail__info-time">
        <div className="reminder-detail__info-time__frequency">
          <span className="reminder-detail__info-time__frequency__title">
            <label htmlFor="icon-modal-notification" className="icon">
              <TbReload />
            </label>
            <h1 className="reminder-detail__info-time__frequency__title--text">
              Frecuencia
            </h1>
          </span>
          <DatePickerAntD />
        </div>
        <div className="reminder-detail__info-time__frequency">
          <span className="reminder-detail__info-time__frequency__title">
            <label htmlFor="icon-modal-notification" className="icon">
              <TbClockPlus />
            </label>
            <h1 className="reminder-detail__info-time__frequency__title--text">
              Hora
            </h1>
          </span>
        </div>
        <div className="reminder-detail__info-time__hour">
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
      <div className="reminder-detail__description-section">
        <section className="sign-in user-profile">
          <section className="sign-in__wallpaper-container">
            <img src={wallpaper} alt="background wallpaper" />
          </section>
          <section className="reminder-detail__description-section__content">
            <h1 className="reminder-detail__description-section__content--title">
              Descripción
            </h1>
            <div className="reminder-detail__description-section__content--text-area">
              <TextArea
                placeholder="¡Recuerda que tienes esta actividad pendiente!"
                autoSize={{
                  minRows: 2,
                  maxRows: 6,
                }}
                bordered={false}
              />
            </div>
            <div className="reminder-detail__info-time__frequency">
              <span className="reminder-detail__info-time__frequency__title">
                <label htmlFor="icon-modal-notification" className="icon">
                  <BiCategoryAlt />
                </label>
                <h1
                  className="reminder-detail__info-time__frequency__title--text"
                  id="category-title"
                >
                  Categorías
                </h1>
              </span>
            </div>
            <div className="reminder-detail__description-section__content--category">
              <CategoriesPicker />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default ReminderDetail;
