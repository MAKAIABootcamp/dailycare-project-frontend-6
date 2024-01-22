import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Modal } from 'antd'
import { getData } from '../../store/content/contentThunks'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { LuFilter } from 'react-icons/lu'


const DailySessions = ({ onFilter, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const [category, setCategory] = useState('')
  const { user } = useSelector((store) => store.user)
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goToExploreActivity = () => navigate('/explore-activity')

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    onFilter(category)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    dispatch(getData(category))
  }, [category])

  return (
    
    <div className='padding'>
    <h1 className='title'>
      Bienvenido <span className='title-user'>{user.name}</span>
    </h1>
    <div className='flex justify-between items-center'>
      <h3 className='subtitle'>Sesiones del día</h3>
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
              id='input-estiramientos'
              name='category'
              onChange={() => setCategory('estiramientos')}
              defaultChecked
            />
            <label htmlFor='input-estiramientos'>Estiramientos</label>
          </div>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='aliviar estres'
              id='input-estres'
              name='category'
              onChange={() => setCategory('aliviar')}
            />
            <label htmlFor='input-estres'>Aliviar el estrés</label>
          </div>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='pensamiento creativo'
              id='input-creativo'
              name='category'
              onChange={() => setCategory('pensamiento creativo')}
            />
            <label htmlFor='input-creativo'>Pensamiento creativo</label>
          </div>
          <div className='flex gap-3'>
            <input
              type='radio'
              value='concentración y memoria'
              id='input-memoria'
              name='category'
              onChange={() => setCategory('concentra')}
            />
            <label htmlFor='input-memoria'>Concentracion y memoria</label>
          </div>
        </div>
      </Modal>
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
        content.map((item, index) => (
          <SplideSlide key={index}>
            <div 
              className='img-container w-96 h-64' 
              onClick={() => goToExploreActivity()}
              id={item.id}
            >
              <p className='overText'>{item.title}</p>
              <img
                className='img'
                src={item.cardImage}
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
