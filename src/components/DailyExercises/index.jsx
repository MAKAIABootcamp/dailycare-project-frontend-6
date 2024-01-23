import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useEffect, useState } from 'react'
import { getUserFromCollection } from '../../services/userServices'
import { setNotificationCheck } from '../../store/users/userSlice'
import { getData } from '../../store/content/contentThunks'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const DailyExercises = () => {

  const [category, setCategory] = useState('')
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToContentDetail = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }

  useEffect(() => {
    dispatch(getData(category))
  }, [category])

  return (
    <div className='padding'>
      <h3 className='subtitle'>Ejercicios de hoy</h3>
      <Splide
        options={{
          type: 'loop',
          gap: '2rem',
          pagination: false,
        }}
        aria-label='My Favorite Images'
      >
        {
          content.map((item, index) => (
            <SplideSlide key={index}>
              <div className='card altcard' onClick={() => goToContentDetail()}>
                <img
                  className='img todayImage'
                  src={item.cardImage}
                  alt={item.title}
                />
                <div className='card-text'>
                  <p className='text-time'>{item.lenght} minutos</p>
                  <p className='text-title'>{item.title}</p>
                  <p className='text-subtitle'>Relajación - Antiestres</p>
                </div>
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
      <h3 className='subtitle'>Recomendados para ti</h3>
      <Splide
        className='customSplide'
        options={{
          type: 'loop',
          gap: '1rem',
          padding: {
            right: '10rem',
          },
          pagination: false,
        }}
        aria-label='My Favorite Images'
      >
        <SplideSlide>
          <div className='card'>
            <div className='img-container' onClick={() => goToContentDetail()}>
              <img
                className='img todayImage'
                src='src/assets/images/run.jpg'
                alt='Image 1'
              />
            </div>
            <div className='card-text'>
              <p className='text-time'>5 minutos</p>
              <p className='text-title'>Meditación</p>
              <p className='text-subtitle'>Antiestres</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='card'>
            <div className='img-container' onClick={() => goToContentDetail()}>
              <img
                className='img todayImage'
                src='src/assets/images/stretch.png'
                alt='Image 2'
              />
            </div>
            <div className='card-text'>
              <p className='text-time'>5 minutos</p>
              <p className='text-title'>Ejercicios de yoga</p>
              <p className='text-subtitle'>Relajación - Antiestres</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default DailyExercises
