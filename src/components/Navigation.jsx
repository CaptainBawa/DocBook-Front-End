import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="wrapper">
      <div className="hamburger p-4 text-3xl lg:hidden" onClick={toggleMenu}>
        <SlMenu />
      </div>
      <nav className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>

        <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="header_nav">
            <h2>DocBook🩺</h2>

          </div>

          <li className="nav-item">
            <NavLink to="/home" activeClassName="active" className="nav-item">
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
      </nav>
    </div>

  );
};

export default Navigation;
