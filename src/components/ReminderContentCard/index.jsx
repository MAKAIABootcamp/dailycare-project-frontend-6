import './styles.sass'

const ReminderContentCard = (props) => {

  return (
    <section className='reminder-card'>
        <div className="reminder-card__category-icon">
            <figure style={{backgroundColor: props.categoryColor}}>
                <img src={props.categoryIcon}/>
            </figure>
        </div>
        <div className='reminder-card__content'>
            <p className='reminder-card__content--title'>Nombre actividad</p>
            <p className='reminder-card__content--description'>Descripción:</p>
            <p className='reminder-card__content--description-content'>¡Recuerda que tienes esta actividad pendiente!</p>
        </div>
        <hr className='reminder-card__hr-reminder'/>
        <div className="reminder-card__time-detail">
            <p className="reminder-card__time-detail--time">10:30</p>
            <p className="reminder-card__time-detail--day-period">AM</p>
            <p className="reminder-card__time-detail--frequency">Día</p>
        </div>
    </section>
    
  )
}

export default ReminderContentCard
