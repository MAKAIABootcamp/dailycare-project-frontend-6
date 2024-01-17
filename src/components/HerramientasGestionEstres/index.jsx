import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/content/contentThunks'

const HerramientasGestionEstres = () => {
  const { content: contenido } = useSelector((store) => store.content)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getData('aliviar'))
  }, [])
  return (<>
    {
      contenido.map((item, index) => (
        <div 
          className='card simpleAltcard cursor-pointer'
          key={index}
        >
          <div className='img-container'>
            <img
              className='img todayImage'
              src={item.cardImage}
              alt='Image 1'
            />
          </div>
          <div className='card-text'>
            <p className='text-time'>{item.length} minutos</p>
            <p className='text-title'>{item.title}</p>
            <p className='text-subtitle'>{item.categories}</p>
          </div>
        </div>
      ))
    }
  </>)
}

export default HerramientasGestionEstres
