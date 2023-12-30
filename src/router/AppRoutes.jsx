import { Route, Routes } from 'react-router-dom'
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
import CodeForm from '../pages/CodeForm'
import SignInWithPhone from '../pages/SignInWithPhone'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-in-phone' element={<SignInWithPhone />} />
      <Route path='code-form' element={<CodeForm />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='reading-detail' element={<ReadingDetail />} />
      <Route path='video-detail' element={<VideoDetail />} />
      <Route path='welcome' element={<Welcome />} />
      <Route path='explore-activity' element={<ExploreActivity />} />
      <Route path='user-profile' element={<UserProfile />} />
      <Route path='reminders-view' element={<RemindersView />} />
      <Route path='reminder-detail' element={<ReminderDetail />} />
      <Route path='activity' element={<Activity />} />
      <Route path='admin-profile' element={<AdminProfile />} />
    </Routes>
  )
}

export default AppRoutes
