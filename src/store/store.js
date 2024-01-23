import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import userReducer from './users/userSlice'
import contentReducer from './content/contentSlice'
import goalReducer from './goals/goalSlice'
import activityReducer from './activity/activitySlice'
import adminStore from './admin/adminSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
    goal: goalReducer,
    activity: activityReducer,
    admin: adminStore
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store
