import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setGoalById } from '../../store/goals/goalSlice'
import './styles.sass'

const ReminderContentCard = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSelectGoal = () => {
        dispatch(setGoalById(props.data))
        navigate(`/reminders-edit/${props.data.id}`)
    }

  return (
    <section className='reminder-card' onClick={handleSelectGoal}>
        <div className="reminder-card__category-icon">
            <figure style={{backgroundColor: props.data.category[1]}}>
                <img src={props.data.category[2]}/>
            </figure>
        </div>
        <div className='reminder-card__content'>
            <p className='reminder-card__content--title'>{props.data.title}</p>
            <p className='reminder-card__content--description'>Descripción:</p>
            <p className='reminder-card__content--description-content'>{props.data.description}</p>
        </div>
        <hr className='reminder-card__hr-reminder'/>
        <div className="reminder-card__time-detail">
            <p className="reminder-card__time-detail--time">{props.data.deadlineTime}</p>
            <p className="reminder-card__time-detail--day-period">{props.data.deadlinePeriod}</p>
            <p className="reminder-card__time-detail--frequency">{props.data.deadlineDate}</p>
        </div>
    </section>
    
  )
}

export default ReminderContentCard
