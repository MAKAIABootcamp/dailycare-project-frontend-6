import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Divider from '../../components/Divider'
import DrawerAntD from '../../components/Drawer'
import { useNavigate } from 'react-router'
import Footer from '../../components/Footer'
import LoadingScreen from '../../components/LoadingScreen'
import { useIsLoginScreen } from '../../context/loginScreenContext'
import { LuFilter } from 'react-icons/lu'
import { getData } from '../../store/content/contentThunks'
import HerramientasGestionEstres from '../../components/HerramientasGestionEstres'
import { Modal, Button } from 'antd'
import './styles.scss'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [category, setCategory] = useState('')
  const { setLoginScreen, loginScreen } = useIsLoginScreen()
  const { user } = useSelector((store) => store.user)
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const goTo4 = () => navigate('/explore-activity')

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
    dispatch(getData(category))
  }, [category])
  
  useEffect(() => {
    const cargaSimulada = setTimeout(() => {
      setLoginScreen(false)
    }, 1500)
    return () => clearTimeout(cargaSimulada)
  }, [])
  return (
    <>
      {loginScreen && <LoadingScreen />}
      <main className='homeMain'>
        <DrawerAntD />
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
                <div className='flex gap-2'>
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
                <div className='flex gap-2'>
                  <input
                    type='radio'
                    value='aliviar estres'
                    id='input-estres'
                    name='category'
                    onChange={() => setCategory('aliviar')}
                  />
                  <label htmlFor='input-estres'>Aliviar el estres</label>
                </div>
                <div className='flex gap-2'>
                  <input
                    type='radio'
                    value='pensamiento creativo'
                    id='input-creativo'
                    name='category'
                    onChange={() => setCategory('pensamiento creativo')}
                  />
                  <label htmlFor='input-creativo'>Pensamiento creativo</label>
                </div>
                <div className='flex gap-2'>
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
                    onClick={() => goTo4()}
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
        <Divider />
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
                        <p className='text-title'>{item.title}</p>
                        <p className='text-subtitle'>{item.tag}</p>
                      </div>
                    </div>
                </SplideSlide>
                ))
              }
          </Splide>
        </div>
        <Divider />
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
            <SplideSlide>
              <div className='card altcard' onClick={() => goToContentDetail()}>
                <img
                  className='img todayImage'
                  src='src/assets/images/run.jpg'
                  alt='Image 1'
                />
                <div className='card-text'>
                  <p className='text-time'>5 minutos</p>
                  <p className='text-title'>Ejercicios de yoga</p>
                  <p className='text-subtitle'>Relajación - Antiestres</p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='card altcard' onClick={() => goToContentDetail()}>
                <img
                  className='img todayImage'
                  src='src/assets/images/stretch.png'
                  alt='Image 2'
                />
                <div className='card-text'>
                  <p className='text-time'>5 minutos</p>
                  <p className='text-title'>Ejercicios de yoga</p>
                  <p className='text-subtitle'>Relajación - Antiestres</p>
                </div>
              </div>
            </SplideSlide>
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
                <div className='img-container' onClick={() => goTo2()}>
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
                <div className='img-container' onClick={() => goTo2()}>
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
        <Divider />
        <div className='padding homeFooter'>
          <h3 className='subtitle'>Herramientas Gestión del estrés</h3>
          <div className='cardContainer'>
            <HerramientasGestionEstres />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Home