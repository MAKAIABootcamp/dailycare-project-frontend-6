import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ReadingDetail from '../pages/ReadingDetail'
import VideoDetail from '../pages/VideoDetail'
import Welcome from '../pages/Welcome'
import UserProfile from '../pages/UserProfile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='reading-detail' element={<ReadingDetail />} />
      <Route path='video-detail' element={<VideoDetail />} />
      <Route path='welcome' element={<Welcome />} />
      <Route path='user-profile' element={<UserProfile />} />
    </Routes>
  )
}

export default AppRoutes
