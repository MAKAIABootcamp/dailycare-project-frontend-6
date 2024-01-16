import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import userReducer from './users/userSlice';
import adminStore from './admin/adminSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminStore
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
