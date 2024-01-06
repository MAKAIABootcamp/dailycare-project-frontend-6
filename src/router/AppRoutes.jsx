import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { setIsAuthenticated, setUser } from '../store/users/userSlice'
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

const AppRoutes = () => {
  const { isAuthenticated, user } = useSelector( store => store.user )
  const [checking, setChecking] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid && !user) {
        dispatch(setIsAuthenticated(true))
        dispatch(setUser({
          id: userLogged.uid,
          email: userLogged.email,
          name: userLogged.displayName,
          // photoURL: userLogged.photoURL,
          accessToken: userLogged.accessToken
        }))
      }
    })
    setChecking(false)
  }, [dispatch, user])

  if (checking) {
    return <div>Cargando...</div>
  }

  return (
      <Routes>
        <Route path='/'>
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path='welcome' element={<Welcome />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-in-phone' element={<SignInWithPhone />} />
            <Route path='code-form' element={<CodeForm />} />
            <Route path='sign-up' element={<SignUp />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticated={isAuthenticated} />}>
            <Route path='reading-detail' element={<ReadingDetail />} />
            <Route path='video-detail' element={<VideoDetail />} />
            <Route path='explore-activity' element={<ExploreActivity />} />
            <Route path='user-profile' element={<UserProfile />} />
            <Route path='reminders-view' element={<RemindersView />} />
            <Route path='reminders-detail' element={<ReminderDetail />} />
            <Route path='activity' element={<Activity />} />
            <Route path='admin-profile' element={<AdminProfile />} />
            <Route path='edit-profile' element={<UpdateUserProfile />} />
            <Route path='home' element={<Home />} />
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
  )
}


export default AppRoutes