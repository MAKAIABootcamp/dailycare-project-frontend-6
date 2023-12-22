import face from '../../assets/images/face.png'
import './styles.sass'

const PersonalContentCard = () => {
  return (
    <article className='personal-content-card'>
      <img className='personal-content-card__image' src={face} alt="" />
      <div className='personal-content-card__bar'></div>
      <div className='personal-content-card__description'>
        <h3 className='personal-content-card__description--title'>Escucha activa</h3>
        <p className='personal-content-card__description--text'>Practica la escucha activa, intenta escuchar, y luego repetir y resumir.</p>
      </div>
    </article>
  )
}

export default PersonalContentCard
