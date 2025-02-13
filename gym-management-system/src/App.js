import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Members from './Admin/Members.js';
import Trainers from './Admin/Trainers.js';
//import AttendanceTracking from './User/AttendanceTracking.js';
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
import UserDetail from './User/UserDetail.js';
import UpdateMember from './Admin/UpdateMember.js';
import UpdateTrainer from './Admin/UpdateTrainer.js';
import ContactList from './Admin/ContactList.js';
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
            <Route path="/admin/members" element={<Members />} />
            <Route path="/admin/trainers" element={<Trainers />} />
            <Route path="/update-member" element={<UpdateMember />} />
            <Route path="/update-trainer" element={<UpdateTrainer />} />
            <Route path="/contact-list" element={<ContactList />} />
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
            <Route path="/trainers" element={<TrainerUser />} />
            <Route path="/contactForm" element={<ContactForm/>} />
            <Route path="/userDetail" element={<UserDetail />} />
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
