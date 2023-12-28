import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null
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
    }
  }
})

export const { setUser, setError, setIsAuthenticated } = userSlice.actions

export default userSlice.reducer