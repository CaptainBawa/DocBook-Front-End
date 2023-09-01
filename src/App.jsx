import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signin';
import BookAppointment from './components/appointments/appointments-form';

import DoctorDetails from './components/doctors/DoctorDetails';
import Appointments from './components/appointments/Appointments';

import AddDoctor from './components/AddDoctor';
import DeleteDoctor from './components/DeleteDoctor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Layout />} />

      <Route path="/appointments-form" element={<BookAppointment />} />


      <Route path="/my-appointments" element={<Appointments />} />
      <Route path="/doctors/:doctorId" element={<DoctorDetails />} />

      <Route path="/add-doctor" element={<AddDoctor />} />
      <Route path="/delete-doctor" element={<DeleteDoctor />} />
    </Routes>
  </BrowserRouter>
);

export default App;
