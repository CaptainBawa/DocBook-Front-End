import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  doctors: [],
  status: 'idle',
  error: null,
};

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
try {
  const response = await axios.get('/doctors');
  return response.data;
} catch (error) {
    throw new Error('Failed to fetch doctors');
  }
});

export const createDoctor = createAsyncThunk('doctors/createDoctor', async (doctorData) => {
    try {
  const response = await axios.post('/doctors', doctorData);
  return response.data;
} catch (error) {
    throw new Error('Failed to create a doctor');
  }
});

export const deleteDoctor = createAsyncThunk('doctors/deleteDoctor', async (doctorId) => {
try {
  await axios.delete(`/doctors/${doctorId}`);
  return doctorId;
} catch (error) {
    throw new Error('Failed to delete a doctor');
  }
});

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.doctors.push(action.payload);
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.doctors = state.doctors.filter((doctor) => doctor.id !== action.payload);
      });
  },
});

export default doctorsSlice.reducer;

export const selectDoctors = (state) => state.doctors.doctors;
export const selectDoctorsStatus = (state) => state.doctors.status;
export const selectDoctorsError = (state) => state.doctors.error;

