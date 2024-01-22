import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGoals } from '../../store/goals/goalThunks';
import ReminderContentCard from '../../components/ReminderContentCard'
import { FaChevronLeft } from 'react-icons/fa'
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineAddAlarm } from "react-icons/md";
import './styles.sass'

const RemindersView = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { goals } = useSelector( store => store.goal );
  const { user } = useSelector( store => store.user );

  const goTo = () => navigate('/reminders-detail')
  const goTo1 = () => navigate('/home')

  useEffect(()=> {
    dispatch(getGoals())
    console.log(user);
  },[])

  return (
    <>
      {goals.length ? (
        <main className='reminders-view'>
          <button className='content-detail__back-button m-3' onClick={() => goTo1()}>
            <FaChevronLeft />
          </button>
          <div>
            <span className="reminders-view__title">
                <label htmlFor="icon-modal-notification" className="icon">
                  <FaRegClock />
                </label>
                <h1 className="reminders-view__title--text">Mis metas</h1>
            </span>
            <p className='reminders-view--description-text'>Estos son las que tienes activas hasta el momento</p>
          </div>
          <div className='reminders-view--container'>
            {
              goals.map((goal, index) => {
                return (
                  goal.user === user.email ? <ReminderContentCard key={index} data={goal} /> : null
                )
              })
            }
          </div>
          <button className='icon-add-reminder-background' onClick={() => goTo()}></button>
          <MdOutlineAddAlarm className='icon-add'/>
        </main>
      ) : <h3>Cargando contenido...</h3>}
    </>
  )
}

export default RemindersView