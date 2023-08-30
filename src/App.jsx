import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'; // Import the Navigation component
import Layout from "./components/layout";
import Login from './components/Login';
import Signup from './components/Signin';

const App = () => (
  <BrowserRouter>
    <Navigation />
	<Layout />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

export default App;