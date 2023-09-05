import React from 'react';
import DoctorList from './doctors/DoctorList';
import Navigation from './Navigation';
import DoctorDetails from './doctors/DoctorDetails';
import '../App.css';

const Layout = () => (
  <div className="flex bg-white">
    <div className="w-2/12">
      <Navigation />
    </div>
    <div className="w-10/12 flex items-center">
      <DoctorList />
    </div>
  </div>
);

export default Layout;
