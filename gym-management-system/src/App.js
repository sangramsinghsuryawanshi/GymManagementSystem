import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Members from './User/Members.js';
import Trainers from './Admin/Trainers.js';
import AttendanceTracking from './User/AttendanceTracking.js';
import Signup from './loginSignup/Signup.js';
import Login from './loginSignup/Login.js';
import Header from './component/Header.js';
import AdminPanel from './Admin/AdminPanel.js';
import AdminHeader from './Admin/AdminHeader.js';
import HomePage from './User/HomePage.js';
import Footer from './component/Footer.js';
import AboutUs from './User/AboutUs.js';
import TrainerUser from './User/TrainerUser.js';
import ContactForm from './User/ContactForm.js';
import './App.css';

const GymManagementSystem = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');  // Properly track the role

  // Handle login success and set user role
  const handleLoginSuccess = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  // Extracted function for role-based routing
  const renderRoutes = () => {
    if (role === 'admin') {
      return (
        <div className="app-container">
          <AdminHeader />
          <Routes>
            <Route path="/" element={<Navigate to="/admin" />} />
            <Route path="/admin/trainers" element={<Trainers />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </Routes>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/members" element={<Members />} />
            <Route path="/trainers" element={<TrainerUser />} />
            <Route path="/contactForm" element={<ContactForm/>} />
            <Route path="/attendance" element={<AttendanceTracking />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer/>
        </div>
      );
    }
  };

  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        renderRoutes()  // Call the extracted function for rendering routes
      )}
    </Router>
  );
};

export default GymManagementSystem;
