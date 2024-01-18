import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGoals } from '../../store/goals/goalThunks';
import ReminderContentCard from '../../components/ReminderContentCard'
import { FaChevronLeft } from 'react-icons/fa'
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineAddAlarm } from "react-icons/md";
import ballon from '../../assets/images/ballon.png'
import balance from '../../assets/images/balance.png'
import books from '../../assets/images/books.png'
import './styles.sass'

const RemindersView = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { goals } = useSelector( store => store.goal );
  const { user } = useSelector( store => store.user );

  const goTo = () => navigate('/reminders-detail')
  const goTo1 = () => navigate('/home')

  const categoryInfo = [
    {
      name: 'Motivación',
      color: 'rgba(251, 227, 191, 0.75)',
      icon: ballon
    },
    {
      name: 'Meditación',
      color: '#CED9A7',
      icon: balance
    },
    {
      name: 'Motivación',
      color: '#FFFFFF',
      icon: books
    }
  ]

  useEffect(()=> {
    dispatch(getGoals())
    console.log(user);
  },[])

  return (
    <main className='reminders-view'>
      <button className='content-detail__back-button m-3' onClick={() => goTo1()}>
        <FaChevronLeft />
      </button>
      <span className="reminders-view__title">
          <label htmlFor="icon-modal-notification" className="icon">
            <FaRegClock />
          </label>
          <h1 className="reminders-view__title--text">Mis metas</h1>
      </span>
      <p className='reminders-view--description-text'>Estos son las que tienes activas hasta el momento</p>
      <div className='reminders-view--container'>
        {
          goals.map((goal,index) => {
            console.log('goal', goal.userToken);
            console.log('user', user.accessToken);
            return (
              goal.userToken === user.accessToken ? <ReminderContentCard key={index} data={goal} /> : null
            )
          })
        }
      </div>
      <button className='icon-add-reminder-background' onClick={() => goTo()}></button>
      <MdOutlineAddAlarm className='icon-add'/>
    </main>
  )
}

export default RemindersView