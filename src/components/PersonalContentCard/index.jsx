import './styles.sass'

const PersonalContentCard = ({ details }) => {
  return (
    <article className='personal-content-card'>
      <img className='personal-content-card__image' src={details.cardImage} alt="" />
      <div className='personal-content-card__bar'></div>
      <div className='personal-content-card__description'>
        <h3 className='personal-content-card__description--title'>{details.title}</h3>
        <p className='personal-content-card__description--text'>{details.material[0]}</p>
      </div>
    </article>
  )
}

export default PersonalContentCard
