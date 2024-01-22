import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoalAsync, updateGoalAsync } from "../../store/goals/goalThunks";
import { Input } from "antd";
import { Select, Space, DatePicker, Dropdown } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const { Option } = Select;
import { TbReload, TbClockPlus } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { FaTrashAlt, FaChevronLeft } from 'react-icons/fa';
import wallpaper from "../../assets/images/wallpaper-4.png";
import Swal from 'sweetalert2'
import "./styles.sass";

const { TextArea } = Input;

const ReminderDetail = () => {

  const navigate = useNavigate()
  const { user } = useSelector((store) => store.user)
  const { goalById } = useSelector((store) => store.goal)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(goalById.title)
  const [date, setDate] = useState(goalById.deadlineDate)
  const [hour, setHour] = useState(goalById.deadlineTime.substr(0,2))
  const [minutes, setMinutes] = useState(goalById.deadlineTime.substr(3,2))
  const [period, setPeriod] = useState(goalById.deadlinePeriod)
  const [description, setDescription] = useState(goalById.description)
  const [category, setCategory] = useState(goalById.category[0])

  const items = [
    {
      label: <span className="FaTrashAlt" onClick={() => handleDelete()}><FaTrashAlt /> Eliminar</span>,
      key: '0'
    }
  ]

  const categoryOptions = {
    pensamientoCreativo: ["Pensamiento creativo", "rgba(251, 227, 191, 0.75)", "https://res.cloudinary.com/dhhyc88td/image/upload/v1705888498/pensamiento_creativo_mrfo9o.png"],
    aliviarEstres: ["Aliviar estrés", "#CED9A7", "https://res.cloudinary.com/dhhyc88td/image/upload/v1705888016/el-alivio-del-estres_glh8vn.png"],
    estiramientos: ["Estiramientos", "#CFE8FF", "https://res.cloudinary.com/dhhyc88td/image/upload/v1705887990/Estiramiento_2_dnbxsh.png"],
    concentracionYMemoria: ["Concentración y memoria", "#7d64a7", "https://res.cloudinary.com/dhhyc88td/image/upload/v1705888078/Concentraci%C3%B3n_wtbkev.png"]
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
      case "Concentración y memoria":
          categoryData = categoryOptions.concentracionYMemoria
        break;
    }
    const time = `${hour}:${minutes}`

    const goalData = {
      id: goalById.id,
      user: user.email,
      title: title,
      deadlineDate: date,
      deadlineTime: time,
      deadlinePeriod: period,
      description: description,
      category: categoryData
    }
    console.log(goalData)
    dispatch(updateGoalAsync(goalData))
    Swal.fire({
      title: '¡Bien Hecho!',
      text: 'Tu meta se ha editado exitosamente',
      icon: 'success'
    })
  }

  const handleDelete = () => {
    dispatch(deleteGoalAsync(goalById.id))
    navigate('/reminders-view')
  }

  const goTo = () => navigate('/reminders-view')

  return (
    <main className="reminder-detail">
      <button className="reminder-detail__back-button m-7" onClick={() => goTo()}>
        <FaChevronLeft />
      </button>
      <Dropdown
        menu={{items}}
        trigger={['click']}
      >
        <button className="reminder-edit__fi-more">
          <FiMoreVertical />
        </button>
      </Dropdown>
      <form
      >
        <div className="reminder-title">
          <Input placeholder="Añade un título" value={title} bordered={false} onChange={(e)=>setTitle(e.target.value)} />
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
              <DatePicker defaultValue={dayjs(date, 'DD/MM/YYYY')} format={dateFormatList} onChange={(_, dataStr) => setDate(dataStr)}/>
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
            <Input placeholder="H" bordered={false} onChange={(e)=>setHour(e.target.value)} value={hour}/>
            <p className="points">:</p>
            <Input
              placeholder="M"
              bordered={false}
              style={{ marginRight: "10px" }}
              onChange={(e)=>setMinutes(e.target.value)}
              value={minutes}
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
                  value={description}
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
                                    <img src={'https://res.cloudinary.com/dhhyc88td/image/upload/v1705888498/pensamiento_creativo_mrfo9o.png'} />
                                </span>
                            </div>
                        </Option>
                        <Option value="Aliviar estrés">
                            <div className='select-content'>
                                <span className='select-content--color' style={{backgroundColor: '#CED9A7'}}></span>
                                <p>Aliviar estrés</p>
                                <span className='select-content--icon'>
                                    <img src={'https://res.cloudinary.com/dhhyc88td/image/upload/v1705888016/el-alivio-del-estres_glh8vn.png'} />
                                </span>
                            </div>
                        </Option>
                        <Option value="Estiramientos">
                            <div className='select-content'>
                                <span className='select-content--color' style={{backgroundColor: '#CFE8FF'}}></span>
                                <p>Estiramientos</p>
                                <span className='select-content--icon'>
                                    <img src={'https://res.cloudinary.com/dhhyc88td/image/upload/v1705887990/Estiramiento_2_dnbxsh.png '} />
                                </span>
                            </div>
                        </Option>
                        <Option value="Concentración y memoria">
                            <div className='select-content'>
                                <span className='select-content--color' style={{backgroundColor: '#7d64a7'}}></span>
                                <p>Concentración y memoria</p>
                                <span className='select-content--icon'>
                                    <img src={'https://res.cloudinary.com/dhhyc88td/image/upload/v1705888078/Concentraci%C3%B3n_wtbkev.png'} />
                                </span>
                            </div>
                        </Option>
                    </Select>
                </Space>
              </div>
              <button className="buttons-container__main-btns--btn-styles btn-create-goal" onClick={(e)=>handleSubmit(e)}> Editar </button>
            </section>
          </section>
        </div>
      </form>
    </main>
  );
};

export default ReminderDetail;

