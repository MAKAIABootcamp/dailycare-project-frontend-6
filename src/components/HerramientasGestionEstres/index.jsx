import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './styles.sass'


const HerramientasGestionEstres = ({ details }) => {
  HerramientasGestionEstres.propTypes = {
    details: PropTypes.object
  }

  const navigate = useNavigate()

  const goToContentDetail = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }
  return (
    <div 
      className='tools-card'
      onClick={() => goToContentDetail(details.id)}
    >
      <div className='tools-card__image-container'>
        <img
          className='tools-card__image-container--image'
          src={details.cardImage}
          alt='Image 1'
        />
      </div>
      <div className='tools-card__card-text'>
        <p className='tools-card__card-text--text-time'>{details.length} minutos</p>
        <p className='tools-card__card-text--text-title'>{details.title}</p>
        <p className='text-subtitle'>{details.categories}</p>
      </div>
    </div>
  )
}

export default HerramientasGestionEstres
