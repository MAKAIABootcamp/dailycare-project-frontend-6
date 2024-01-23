import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { getData } from '../../store/content/contentThunks'
import { getUserFromCollection } from '../../services/userServices'
import { setNotificationCheck } from '../../store/users/userSlice'
import { Tooltip } from 'antd'

const ActiveBreaks = () => {
  const { user } = useSelector((store) => store.user)
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToContentDetail = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }

  useEffect(() => {
    getUserFromCollection(user.id)
    .then(response => {
      dispatch(setNotificationCheck(response.notificationCheck))
    })
    dispatch(getData('estiramientos'))
  }, [])

  return (
    <div className='padding'>
      <h3 className='subtitle'>Pausas activas</h3>
      <Splide
        options={{
          type: 'loop',
          gap: '2rem',
          padding: {
            right: '8rem',
          },
          pagination: false,
        }}
        aria-label='My Favorite Images'
      >
          {
            content.map((item, index) => (
              <SplideSlide key={index}>
                <div className='card' id={item.id}>
                  <div className='img-container' onClick={() => goToContentDetail(item.id)}>
                    <img
                      className='img w-32 h-32'
                      src={item.cardImage}
                      alt='Image 1'
                    />
                  </div>
                  <div className='card-text'>
                    <p className='text-time'>{item.lenght} min</p>
                    <Tooltip
                      title={item.title}
                      color='#71a46b' 
                      className='text-title'
                    >
                      <span>{item.title}</span>
                    </Tooltip>
                    <p className='text-subtitle'>{item.tag[0]}</p>
                  </div>
                </div>
            </SplideSlide>
            ))
          }
      </Splide>
    </div>
  )
}

export default ActiveBreaks
