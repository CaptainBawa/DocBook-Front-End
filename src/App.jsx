import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Doctor from './components/doctors/DoctorList';      
import AddDoctor from './components/doctors/AddDoctor';
import Navigation from './components/Navigation'; // Import the Navigation component

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Doctor />} />
      <Route path="/addDoctor" element={<AddDoctor />} />
    </Routes>

  </BrowserRouter>
);

export default App;
