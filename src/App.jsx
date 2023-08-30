
// import './App.css';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import HomePage from './components/HomePage';
// import Layout from './components/Layout';

// const App = () => {
//   const userLoggedIn = useSelector((state) => state.users.users.length > 0);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={userLoggedIn ? <Layout /> : <HomePage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;





import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage';
import Layout from './components/Layout';

const App = () => {
  const userLoggedIn = useSelector((state) => state.users.users.length > 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/layout" element={userLoggedIn ? <Layout /> : <HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;





// // src/App.jsx
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from "./components/layout";
// import Login from './components/Login';
// import Signup from './components/Signin';

// const App = () => (
//   <BrowserRouter>
// 	<Layout />
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   </BrowserRouter>
// );

// export default App;