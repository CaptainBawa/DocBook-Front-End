import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav className="nav-container">
      <h2>DocBook🩺</h2>
      <ul>
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" className="nav-item">DOCTORS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/appointments-form" activeClassName="active">ADD APPOINTMENT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/my-appointments" activeClassName="active">APPOINTMENTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add-doctor" activeClassName="active">ADD DOCTOR</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/delete-doctor" activeClassName="active">DELETE DOCTOR</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
