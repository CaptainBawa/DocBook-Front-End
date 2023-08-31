import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';
import appointmentsReducer from './appointmentsSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
    users: usersReducer,
  },
});
export default store;
