// src/redux/appointmentsSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  appointments: [],
  status: 'idle',
  error: null,
};

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  try {
    const response = await axios.get('https://docbook-ln5p.onrender.com/appointments');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch appointments');
  }
});

export const createAppointment = createAsyncThunk('appointments/createAppointment', async (appointmentData) => {
  try {
    const response = await axios.post('https://docbook-ln5p.onrender.com/appointments', appointmentData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create an appointments');
  }
});

export const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (appointmentId) => {
  try {
    await axios.delete(`https://docbook-ln5p.onrender.com/appointments/${appointmentId}`);
    return appointmentId;
  } catch (error) {
    throw new Error('Failed to delete the appointment');
  }
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.appointments = state.appointments.filter((appointment) => appointment.id !== action.payload);
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;

export const selectAppointments = (state) => state.appointments.appointments;
export const selectAppointmentsStatus = (state) => state.appointments.status;
export const selectAppointmentsError = (state) => state.appointments.error;
