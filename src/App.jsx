import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Doctor from './components/doctors/DoctorList';      
import AddDoctor from './components/doctors/AddDoctor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Doctor />} />
      <Route path="/addDoctor" element={<AddDoctor />} />
    </Routes>
  </BrowserRouter>
);

export default App;