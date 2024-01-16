import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    notificationCheck: false
  },
  reducers: {
    setUser: ( state, action ) => {
      state.user = action.payload
    },
    setError: ( state, action ) => {
      state.error = action.payload
    },
    setIsAuthenticated: ( state, action ) => {
      state.isAuthenticated = action.payload
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user, ...action.payload
      }
    },
    setNotificationCheck: (state, action) => {
      state.notificationCheck = action.payload
    }
  }
})


export const { setUser, setError, setIsAuthenticated, setNotificationCheck, updateUser } = userSlice.actions

export default userSlice.reducer
