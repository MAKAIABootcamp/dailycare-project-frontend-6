import { createSlice } from '@reduxjs/toolkit'

const suggestedContent = createSlice({
  name: 'suggestedContent',
  initialState: {
    suggestedContent: [],
    error: null
  },
  reducers: {
    setSuggestedContent: ( state, action ) => {
      state.suggestedContent = action.payload
    },
    setError: ( state, action ) => {
      state.error = action.payload
    }
  }
})

export const { setSuggestedContent, setError } = suggestedContent.actions

export default suggestedContent.reducer