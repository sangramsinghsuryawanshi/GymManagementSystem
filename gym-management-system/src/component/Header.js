import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import '../CSS/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav className="nav-bar-1">
        <Link to="/home" className="nav-button-1">Home</Link>
        <Link to="/aboutUs" className="nav-button-1">About Us</Link>
        <Link to="/trainers" className="nav-button-1">Trainers</Link>
        <Link to="/contactForm" className="nav-button-1">Enquiry</Link>
        <Link to="/userDetail" className="nav-button-1">Profile</Link>
        <button 
            onClick={() => {
              localStorage.clear(); // Clear any stored user data
              window.location.href = '/login'; // Redirect to login page
            }} 
            className="logout-button-1"
          >
            Logout
          </button>
      </nav>
    </header>
  );
};

export default Header;
