import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DoctorList from './doctors/DoctorList';
import Navigation from './Navigation';
import '../App.css';

const Layout = () => (
  <div className="flex bg-white">
    <div className="w-2/12">
      <Navigation />
    </div>
    <div className="w-10/12 flex items-center">
      <Routes>
        <Route path="/" element={<DoctorList />} />
      </Routes>
    </div>
  </div>
);

export default Layout;
