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
import { Modal } from 'antd'
import { getUserFromCollection } from '../../services/userServices'
import { setNotificationCheck } from '../../store/users/userSlice'
import './styles.scss'
import DailySessions from '../../components/DailySessions'
import ActiveBreaks from '../../components/ActiveBreaks'
import DailyExercises from '../../components/DailyExercises'

const Home = () => {
  const { setLoginScreen, loginScreen } = useIsLoginScreen()
  const { user } = useSelector((store) => store.user)
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()

  const [dailySessionsCategory, setDailySessionsCategory] = useState('')
  const [activeBreaksCategory, setActiveBreaksCategory] = useState('')
  const [dailyExercisesCategory, setDailyExercisesCategory] = useState('')

  const navigate = useNavigate()

  const goToContentDetail = ( id ) => {
    navigate(`/reading-detail/${id}`)
  }

  const handleDailySessionsFilter = ( category ) => setDailySessionsCategory(category)
  const handleActiveBreaksFilter = ( category ) => setActiveBreaksCategory(category)
  const handleDailyExercisesFilter = ( category ) => setDailyExercisesCategory(category)


  useEffect(() => {
    getUserFromCollection(user.id)
    .then(response => {
      dispatch(setNotificationCheck(response.notificationCheck))
    })
    dispatch(getData('aliviar'))
  }, [])

  
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
        <DailySessions 
          onFilter={handleDailySessionsFilter} 
          category={dailySessionsCategory} 
        />
        <Divider />
        <ActiveBreaks 
          onFilter={handleActiveBreaksFilter} 
          category={activeBreaksCategory} 
        />
        <Divider />
        <DailyExercises 
          onFilter={handleDailyExercisesFilter} 
          category={dailyExercisesCategory} 
        />
        <Divider />
        <div className='padding homeFooter'>
          <h3 className='subtitle'>Herramientas Gestión del estrés</h3>
          <div className='cardContainer'>
            {
              content.map((item, index) => (
                <HerramientasGestionEstres 
                  key={index}
                  details={item} 
                  onClick={() => goToContentDetail()}
                />
              ))
            }
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Home