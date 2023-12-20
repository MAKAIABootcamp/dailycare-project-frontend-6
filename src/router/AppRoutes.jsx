import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ReadingDetail from '../pages/ReadingDetail'
import VideoDetail from '../pages/VideoDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='reading-detail' element={<ReadingDetail />} />
      <Route path='video-detail' element={<VideoDetail />} />
    </Routes>
  )
}

export default AppRoutes
