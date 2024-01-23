import medal from '../../assets/icons/medal.svg'
import trophy from '../../assets/icons/trophy.svg'
import './styles.sass'

const ActivityCard = (props) => {
  return (
    <article className='activity-card'>
      <section className='activity-card__content-card'>
        <div className='activity-card__content-card--icon'>
          <img src={props.activity.img} alt='activity reward icon' />
        </div>
        <div className='activity-card__content-card--description'>
          <span className='name'>{props.activity.name}</span>
          <span className='points-number'>{props.activity.score}</span>
        </div>
        <div className='activity-card__content-card--reward'>
          <img className='reward-icon' src={props.activity.badge[1]} alt='trophy icon' />
          <span className='reward-name'>{props.activity.badge[0]}</span>
        </div>
      </section>
    </article>
  )
}

export default ActivityCard
