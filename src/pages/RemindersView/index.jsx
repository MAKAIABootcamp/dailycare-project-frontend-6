import ReminderContentCard from '../../components/ReminderContentCard'
import { FaChevronLeft } from 'react-icons/fa'
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineAddAlarm } from "react-icons/md";
import ballon from '../../assets/images/ballon.png'
import balance from '../../assets/images/balance.png'
import books from '../../assets/images/books.png'
import './styles.sass'
import { useNavigate } from 'react-router-dom';

const RemindersView = () => {

  const navigate = useNavigate()

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
          categoryInfo.map((reminder,index) => {
            return <ReminderContentCard key={index} categoryColor={reminder.color} categoryIcon={reminder.icon} />
          })
        }
      </div>
      <button className='icon-add-reminder-background' onClick={() => goTo()}></button>
      <MdOutlineAddAlarm className='icon-add'/>
    </main>
  )
}

export default RemindersView