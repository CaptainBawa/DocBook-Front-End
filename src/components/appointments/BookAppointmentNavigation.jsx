import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BookAppointmentNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed h-screen bg-white top-0 left-0 transition-transform transform ${
      menuOpen ? 'translate-x-0' : '-translate-x-full'
    } z-50`}
    >
      <button className="hamburger" type="button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`nav-links ${menuOpen ? 'visible' : 'hidden'}`}>
        <ul>
          <li className="nav-item">
            <NavLink to="/home" activeClassName="active">
              DOCTORS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/appointments-form" activeClassName="active">
              ADD APPOINTMENT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-appointments" activeClassName="active">
              APPOINTMENTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-doctor" activeClassName="active">
              ADD DOCTOR
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/delete-doctor" activeClassName="active">
              DELETE DOCTOR
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookAppointmentNavigation;
