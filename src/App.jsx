import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Doctor from './components/Doctor';      
import AddDoctor from './components/AddDoctor';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Doctor />} />
        <Route path="/" element={<AddDoctor />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;