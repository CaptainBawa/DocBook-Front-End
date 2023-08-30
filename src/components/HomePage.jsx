// import React, { useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signin';

// const HomePage = () => {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <div>
//       <h1>Welcome to DocBook🩺</h1>
//       <div>
//         <button onClick={() => setShowLogin(true)}>Login</button>
//         <button onClick={() => setShowLogin(false)}>Signup</button>
//       </div>
//       {showLogin ? <Login /> : <Signup />}
//       <Outlet />
//     </div>
//   );
// };

// export default HomePage;





import React from 'react';
import Signup from './Signin';
import Login from './Login'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to DocBook🩺</h1>
      <Login />
      <Signup />
    </div>
  );
};

export default HomePage;
