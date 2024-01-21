import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createGoalAsync } from "../../store/goals/goalThunks";
import { Input } from "antd";
import { Select, Space, DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const { Option } = Select;
import { FaChevronLeft } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { TbClockPlus } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import wallpaper from "../../assets/images/wallpaper-4.png";
import "./styles.sass";

const { TextArea } = Input;

const ReminderDetail = () => {

  const navigate = useNavigate()
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(null)
  const [date, setDate] = useState(null)
  const [hour, setHour] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [period, setPeriod] = useState('AM')
  const [description, setDescription] = useState(null)
  const [category, setCategory] = useState('Selecciona una opción')

  const categoryOptions = {
    pensamientoCreativo: ["Pensamiento creativo", "rgba(251, 227, 191, 0.75)", "https://res.cloudinary.com/ddsed1j6u/image/upload/v1705642097/ballon_vdoiad.png"],
    aliviarEstres: ["Aliviar estrés", "#CED9A7", "https://res.cloudinary.com/ddsed1j6u/image/upload/v1705642097/balance_xqltw1.png"],
    estiramientos: ["Estiramientos", "#CFE8FF", "https://res.cloudinary.com/ddsed1j6u/image/upload/v1705821879/extension_qndszt.png"]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let categoryData = []
    switch (category) {
      case "Pensamiento creativo":
          categoryData = categoryOptions.pensamientoCreativo
        break;
      case "Aliviar estrés":
          categoryData = categoryOptions.aliviarEstres
        break;
      case "Estiramientos":
          categoryData = categoryOptions.estiramientos
        break;
      case value:
        
        break;
    }
    const time = `${hour}:${minutes}`

    const goalData = {
      user: user.email,
      title: title,
      deadlineDate: date,
      deadlineTime: time,
      deadlinePeriod: period,
      description: description,
      category: categoryData
    }
    console.log(goalData)
    dispatch(createGoalAsync(goalData))
  }
  // const onSelectDate = ( _ , dateStr) => {
  //   setDate(dateStr)
  // }

  // const onSelectPeriod = ( period ) => {
  //   setDate(period)
  // }

  // const onSelectCategory = ( category ) => {
  //   setCategory(category)
  // }

  const goTo = () => navigate('/reminders-view')

  return (
    <main className="reminder-detail">
      <button className="reminder-detail__back-button m-7" onClick={() => goTo()}>
        <FaChevronLeft />
      </button>
      <form
        // onSubmit={handleSubmit(handleRegister)}
      >
        <div className="reminder-title">
          <Input placeholder="Añade un título" bordered={false} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="reminder-detail__info-time">
          <div className="reminder-detail__info-time__frequency">
            <span className="reminder-detail__info-time__frequency__title">
              <label htmlFor="icon-modal-notification" className="icon">
                <TbReload />
              </label>
              <h1 className="reminder-detail__info-time__frequency__title--text">
                Fecha límite
              </h1>
            </span>
            <Space direction="vertical" size={12}>
              <DatePicker defaultValue={dayjs('01/01/2024', 'DD/MM/YYYY')} format={dateFormatList} onChange={(_, dataStr) => setDate(dataStr)}/>
            </Space>
          </div>
          <div className="reminder-detail__info-time__frequency">
            <span className="reminder-detail__info-time__frequency__title">
              <label htmlFor="icon-modal-notification" className="icon">
                <TbClockPlus />
              </label>
              <h1 className="reminder-detail__info-time__frequency__title--text">
                Hora (hh:mm)
              </h1>
            </span>
          </div>
          <div className="reminder-detail__info-time__hour">
            <Input placeholder="H" bordered={false} onChange={(e)=>setHour(e.target.value)} />
            <p className="points">:</p>
            <Input
              placeholder="M"
              bordered={false}
              style={{ marginRight: "10px" }}
              onChange={(e)=>setMinutes(e.target.value)}
            />
            <Space>
                <Select value={period} onChange={setPeriod}>
                    <Option value="AM">AM</Option>
                    <Option value="PM">PM</Option>
                </Select>
            </Space>
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
                  placeholder="Escribe en una frase corta la meta que quieres alcanzar"
                  autoSize={{
                    minRows: 2,
                    maxRows: 6,
                  }}
                  bordered={false}
                  onChange={(e)=>setDescription(e.target.value)}
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
                <Space style={{width: '70%'}}>
                    <Select value={category} onChange={setCategory} style={{width: '100%'}}>
                        <Option disabled value="">Selecciona una categoría</Option>
                        <Option value="Pensamiento creativo">
                            <div className='select-content'>
                                <span className='select-content--color' style={{backgroundColor: '#FBE3BF'}}></span>
                                <p>Pensamiento creativo</p>
                                <span className='select-content--icon'>
                                    <img src={'https://res.cloudinary.com/ddsed1j6u/image/upload/v1705642097/ballon_vdoiad.png'} />
                                </span>
                            </div>
                        </Option>
                        <Option value="Aliviar estrés">
                            <div className='select-content'>
                                <span className='select-content--color' style={{backgroundColor: '#CED9A7'}}></span>
                                <p>Aliviar estrés</p>
                                <span className='select-content--icon'>
                                    <img src={'https://res.cloudinary.com/ddsed1j6u/image/upload/v1705642097/balance_xqltw1.png'} />
                                </span>
                            </div>
                        </Option>
                        <Option value="Estiramientos">
                            <div className='select-content'>
                                <span className='select-content--color' style={{backgroundColor: '#CFE8FF'}}></span>
                                <p>Estiramientos</p>
                                <span className='select-content--icon'>
                                    <img src={'https://res.cloudinary.com/ddsed1j6u/image/upload/v1705821879/extension_qndszt.png'} />
                                </span>
                            </div>
                        </Option>
                    </Select>
                </Space>
              </div>
              <button onClick={(e)=>handleSubmit(e)}> Crear </button>
            </section>
          </section>
        </div>
      </form>
    </main>
  );
};

export default ReminderDetail;
