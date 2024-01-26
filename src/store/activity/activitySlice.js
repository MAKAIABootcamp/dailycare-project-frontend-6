import { createSlice } from "@reduxjs/toolkit";

const activitySlice = createSlice({
  name: 'activity', 
  initialState: {
    activities: [],
    totalScoreG: null,
    doneActivities: null,
    error: null
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    setTotalScoreG: (state, action) => {
      state.totalScoreG = action.payload;
    },
    setDoneActivities: (state, action) => {
      state.doneActivities = action.payload;
    },
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})

export const { setActivities, setTotalScoreG, setDoneActivities, addActivity, setError } = activitySlice.actions

export default activitySlice.reducer