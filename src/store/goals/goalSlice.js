import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: 'goal', 
  initialState: {
    goals: [],
    goalById: {},
    error: null
  },
  reducers: {
    setGoals: (state, action) => {
      state.goals = action.payload;
    },
    setGoalById: (state, action) => {
      state.goalById = action.payload;
    },
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },
    updateGoal: (state, action) => {
      state.goals = state.goals.map((goal)=> goal.id === action.payload.id ? { ...action.payload }: goal)
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter(( item ) => item.id !== action.payload)
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
})

export const { setGoals, setGoalById, addGoal, updateGoal, deleteGoal, setError } = goalSlice.actions

export default goalSlice.reducer