import React, { useState } from 'react';
import axios from 'axios';

function Logout() {
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await axios.delete('https://docbook-ln5p.onrender.com/users/sign_out');
      window.location.href = '/';
    } catch (error) {
      setError(`Error logging out: ${error.message}`);
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <button type="button" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default Logout;
