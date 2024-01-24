import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { getData } from '../../store/content/contentThunks'
import { Modal, Tooltip } from 'antd'
import { LuFilter } from 'react-icons/lu'
import { getDataFromSuggestedContent } from '../../store/suggestedContent/suggestedContentThunks'

const DailyExercises = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [category, setCategory] = useState('')
  const { content } = useSelector((store) => store.content)
  const { suggestedContent } = useSelector((store) => store.suggestedContent)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToContentDetail = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }

  const goToExploreActivity = (category) => {
    navigate(`/explore-activity/${category}`)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    dispatch(getData(category))
  }, [category])

  useEffect(() => {
    dispatch(getDataFromSuggestedContent())
  }, [])

  return (
    <div className='padding'>
      <div className='flex justify-between items-center'>
        <h3 className='subtitle'>Ejercicios de hoy</h3>
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
          pagination: false,
        }}
        aria-label='My Favorite Images'
      >
        {
          content.map((item, index) => (
            <SplideSlide key={index}>
              <div 
                className='card altcard cursor-pointer' 
                onClick={() => goToContentDetail(item.id)}
              >
                <img
                  className='img todayImage'
                  src={item.cardImage}
                  alt={item.title}
                />
                <div className='card-text'>
                  <p className='text-time'>{item.lenght} minutos</p>
                  <Tooltip 
                    title={item.title}
                    color='#71a46b'
                    className='text-title'
                  >
                    {item.title}
                  </Tooltip>
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
        {
          suggestedContent.map((item, index) => (
            <SplideSlide
              key={index}
            >
              <div
                className='card'
              >
                <div 
                  className='img-container' 
                  onClick={() => goToExploreActivity(item.category)}
                >
                  <img
                    className='img todayImage'
                    src={item.coverImage}
                    alt='Image 2'
                  />
                </div>
                <div className='card-text'>
                  <p className='text-time'>5 minutos</p>
                  <Tooltip 
                    title={item.title}
                    color='#71a46b'
                    className='text-title'
                  >
                    {item.title}
                  </Tooltip>
                  <p className='text-subtitle'>Relajación - Antiestres</p>
                </div>
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
  )
}

export default DailyExercises
