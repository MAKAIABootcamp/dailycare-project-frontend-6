import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    allUsers: [],
    error: null
  },
  reducers: {
    setUsers: ( state, action ) => {
      state.users = action.payload
    },
    setError: ( state, action ) => {
      state.error = action.payload
    },
  }
})


export const { setUsers, setError } = adminSlice.actions

export default adminSlice.reducer
