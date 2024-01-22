import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { getUserFromCollection } from '../../services/userServices'
import { setNotificationCheck } from '../../store/users/userSlice'
import { getData } from '../../store/content/contentThunks'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { LuFilter } from 'react-icons/lu'

const ActiveBreaks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [category, setCategory] = useState('')
  const { user } = useSelector((store) => store.user)
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToContentDetail = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }

  const showModal = () => {
    setIsModalOpen(true)
  };

  const handleOk = () => {
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  useEffect(() => {
    getUserFromCollection(user.id)
    .then(response => {
      dispatch(setNotificationCheck(response.notificationCheck))
    })
    dispatch(getData(category))
  }, [category])

  return (
    <div className='padding'>
      <div className='flex justify-between items-center'>
      <h3 className='subtitle'>Pausas activas</h3>
      <button 
        className='text-3xl'
        onClick={showModal}
      >
        <LuFilter />
      </button>
      <Modal 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <button
            key={1}
            className='bg-green-800 text-white font-semibold tracking-wider px-8 py-2 mr-8 rounded-lg'
            onClick={handleOk}
          >
            Aplicar filtro
          </button>
        ]}
      >
        <div className='w-full p-8'>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='estiramientos'
              id='input-estiramientos-ab'
              name='category'
              onChange={() => setCategory('estiramientos')}
              defaultChecked
            />
            <label htmlFor='input-estiramientos-ab'>Estiramientos</label>
          </div>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='aliviar estres'
              id='input-estres-ab'
              name='category'
              onChange={() => setCategory('aliviar')}
            />
            <label htmlFor='input-estres-ab'>Aliviar el estrés</label>
          </div>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='pensamiento creativo'
              id='input-creativo-ab'
              name='category'
              onChange={() => setCategory('pensamiento creativo')}
            />
            <label htmlFor='input-creativo-ab'>Pensamiento creativo</label>
          </div>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='concentración y memoria'
              id='input-memoria-ab'
              name='category'
              onChange={() => setCategory('concentra')}
            />
            <label htmlFor='input-memoria-ab'>Concentracion y memoria</label>
          </div>
        </div>
      </Modal>
    </div>
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
                    <p className='text-title'>{item.title}</p>
                    <p className='text-subtitle'>{item.tag}</p>
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
