import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getDataFromSuggestedContent } from '../../store/suggestedContent/suggestedContentThunks'


const DailySessions = () => {
  const { user } = useSelector((store) => store.user)
  const { suggestedContent } = useSelector((store) => store.suggestedContent)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToExploreActivity = (category) => {
    navigate(`/explore-activity/${category}`)
  }

  useEffect(() => {
    dispatch(getDataFromSuggestedContent())
  }, [])

  return (
    
    <div className='padding'>
    <h1 className='title'>
      Bienvenido <span className='title-user'>{user.name}</span>
    </h1>
    <div className='flex justify-between items-center'>
      <h3 className='subtitle'>Sesiones del día</h3>
    </div>
    <Splide
      options={{
        type: 'loop',
        gap: '3rem',
        padding: {
          right: '10rem',
        },
        pagination: false,
      }}
      aria-label='My Favorite Images'
    >
      {
        suggestedContent.map((item, index) => (
          <SplideSlide key={index}>
            <div 
              className='img-container w-96 h-64 rounded-lg' 
              onClick={() => goToExploreActivity(item.category)}
              id={item.id}
            >
              <p className='overText'>{item.title}</p>
              <img
                className='img image-session rounded-lg'
                src={item.coverImage}
                alt='Image 1'
              />
            </div>
          </SplideSlide>
        ))
      }
    </Splide>
  </div>
  )
}

export default DailySessions
