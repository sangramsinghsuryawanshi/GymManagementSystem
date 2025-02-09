import React from 'react';
import { Link } from 'react-router-dom';
import '../AdminCSS/AdminHeader.css';

const AdminHeader = () => {
  return (
    <header className="admin-header shadow-md p-4 bg-gray-800 text-white">
      <nav className="nav-bar flex justify-between items-center">
        <div className="logo text-xl font-bold">
          <Link to="/admin">Gym Admin Panel</Link>
        </div>
        <div className="nav-links flex space-x-4">
          <Link to="/admin/members" className="nav-button">Manage Members</Link>
          <Link to="/admin/trainers" className="nav-button">Manage Trainers</Link>
          <Link to="/admin/payments" className="nav-button">Payments</Link>
          <Link to="/admin/attendance" className="nav-button">Attendance</Link>
          <Link to="/admin/reports" className="nav-button">Reports</Link>
          <button 
            onClick={() => {
              localStorage.clear(); // Clear any stored user data
              window.location.href = '/login'; // Redirect to login page
            }} 
            className="logout-button bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
