import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation'; // Import the Navigation component

const App = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

export default App;
