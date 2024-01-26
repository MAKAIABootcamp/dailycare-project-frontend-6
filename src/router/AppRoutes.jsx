import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { getToken, onMessage } from 'firebase/messaging'
import { auth, messaging } from '../firebase/firebaseConfig'
import { setIsAuthenticated, setUser } from '../store/users/userSlice'
import { toast } from 'react-toastify'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ReadingDetail from '../pages/ReadingDetail'
import VideoDetail from '../pages/VideoDetail'
import Welcome from '../pages/Welcome'
import ExploreActivity from '../pages/Explore_activity'
import UserProfile from '../pages/UserProfile'
import RemindersView from '../pages/RemindersView'
import ReminderDetail from '../pages/ReminderDetail'
import Activity from '../pages/Activity'
import AdminProfile from '../pages/AdminProfile'
import PublicRoutes from './PublicRoutes'
import PrivatedRoutes from './PrivatedRoutes'
import CodeForm from '../pages/CodeForm'
import SignInWithPhone from '../pages/SignInWithPhone'
import UpdateUserProfile from '../pages/UpdateUserProfile'
import RemindersEdit from '../pages/RemindersEdit'
import { LoginScreenProvider } from '../context/loginScreenContext'
import AdminHome from '../pages/AdminHome'
import 'react-toastify/dist/ReactToastify.css'
import './AppRoutes.sass'
import { Skeleton } from 'antd'

const AppRoutes = () => {
  const { isAuthenticated, user, notificationCheck } = useSelector((store) => store.user)
  const [checking, setChecking] = useState(true)
  const dispatch = useDispatch()
  const activateMessages = async () => {
    const token = await getToken(messaging, {
      vapidKey: 'BKIg25jAz7puC5EMJqK4qfjMx9FQU_RXrZPxlx20dozytA44Sl1iUREedEWvuofKGJ9ePLLjOMRj7vGQY-6m5CY'
    }).catch(error => console.log('Error al generar el token'))


    if(token) console.log('Token:', token)
    else console.log('No hay token')
  }

  const NotificationMsg = (props) => (
    <div className='notification-message-container'>
      <figure>
        <img src={props.message.notification.image}/>
      </figure>
      <h3>{props.message.notification.title}</h3>
    </div>
  )

  useEffect(() => {
    onMessage(messaging, (message) => {
      console.log('Mensaje', message)
      toast(<NotificationMsg message={message} />)
    })
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid && !user) {
        dispatch(setIsAuthenticated(true))
        dispatch(
          setUser({
            id: userLogged.uid,
            email: userLogged.email,
            name: userLogged.displayName,
            accessToken: userLogged.accessToken,
            photoURL: userLogged.photoURL
          })
        )
        activateMessages()
      }
    })
    
    setChecking(false)
  }, [dispatch, user])

  if (checking) {
    return (<>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>)
  }
  console.log(user)

  return (
    <LoginScreenProvider>
      <Routes>
        <Route path='/'>
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} role={user?.rol} />}>
            {/* <Route path='welcome' element={<Welcome />} /> */}
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-in-phone' element={<SignInWithPhone />} />
            <Route path='code-form' element={<CodeForm />} />
            <Route path='sign-up' element={<SignUp />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticated={isAuthenticated} />}>
            <Route path='reading-detail/:id' element={<ReadingDetail />} />
            <Route path='video-detail' element={<VideoDetail />} />
            <Route path='explore-activity/:category' element={<ExploreActivity />} />
            <Route path='user-profile' element={<UserProfile />} />
            <Route path='reminders-view' element={<RemindersView />} />
            <Route path='reminders-detail' element={<ReminderDetail />} />
            <Route path='reminders-edit/:id' element={<RemindersEdit />} />
            <Route path='activity' element={<Activity />} />
            <Route path='admin-home' element={<AdminHome />} />
            <Route path='admin-profile' element={<AdminProfile />} />
            <Route path='edit-profile' element={<UpdateUserProfile />} />
            <Route path='home' element={<Home />} />
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </LoginScreenProvider>
  )
}

export default AppRoutes
