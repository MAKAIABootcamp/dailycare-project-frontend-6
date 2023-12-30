import medal from '../../assets/icons/medal.svg'
import trophy from '../../assets/icons/trophy.svg'
import './styles.sass'

const ActivityCard = () => {
  return (
    <article className='activity-card'>
      <section className='activity-card__content-card'>
        <div className='activity-card__content-card--icon'>
          <img src={medal} alt='activity reward icon' />
        </div>
        <div className='activity-card__content-card--description'>
          <span className='name'>Nombre actividad</span>
          <span className='points-number'>#puntos acumulados</span>
        </div>
        <div className='activity-card__content-card--reward'>
          <img className='reward-icon' src={trophy} alt='trophy icon' />
          <span className='reward-name'>Insignia</span>
        </div>
      </section>
    </article>
  )
}

export default ActivityCard
