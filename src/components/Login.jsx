import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/users/sign_in', { user: { username, password } });
      window.location.href = '/home';
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.message || 'An error occurred during login.';
        setErrorMessage(errorMessage);
      } else if (error.request) {
        setErrorMessage('No response from the server. Please try again later.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="bg-pic">
      <p className="welcome">
        We&rsquo;re delighted to have you here, connecting
        you with the best healthcare professionals at
        your fingertips. Your journey to better health
        begins now.
      </p>
      <div className="login-container">
        <h2>Login</h2>
        <p>
          Don&rsquo;t have an account?
          {' '}
          <Link to="/signup">Sign up</Link>
        </p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
