import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signin';
import BookAppointment from './components/appointments/appointments-form';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/appointments-form" element={<BookAppointment />} />
    </Routes>
  </BrowserRouter>
);

export default App;
