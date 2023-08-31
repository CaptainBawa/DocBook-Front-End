import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signin';
import DoctorDetails from './components/doctors/DoctorDetails';
import Appointments from './components/appointments/Appointments';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/my-appointments" element={< Appointments/>} />
      <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
