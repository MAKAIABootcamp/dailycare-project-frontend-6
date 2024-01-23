import { createSlice } from "@reduxjs/toolkit";

const activitySlice = createSlice({
  name: 'activity', 
  initialState: {
    activities: [],
    error: null
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})

export const { setActivities, addActivity, setError } = activitySlice.actions

export default activitySlice.reducer