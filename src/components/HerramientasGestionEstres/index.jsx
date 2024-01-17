import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


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
      className='card simpleAltcard cursor-pointer'
      onClick={() => goToContentDetail(details.id)}
    >
      <div className='img-container'>
        <img
          className='img todayImage'
          src={details.cardImage}
          alt='Image 1'
        />
      </div>
      <div className='card-text'>
        <p className='text-time'>{details.length} minutos</p>
        <p className='text-title'>{details.title}</p>
        <p className='text-subtitle'>{details.categories}</p>
      </div>
    </div>
  )
}

export default HerramientasGestionEstres
