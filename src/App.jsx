import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Doctor from './components/DoctorList';      
// import AddDoctor from './components/AddDoctor';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Doctor />} />
      {/* <Route path="/" element={<AddDoctor />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;