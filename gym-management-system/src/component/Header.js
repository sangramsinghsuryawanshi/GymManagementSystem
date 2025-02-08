import React from 'react';
import '../CSS/Header.css';

const Header = ({ setActiveModule }) => {
  return (
    <header className="app-header">
      <nav className="nav-bar">
        <button onClick={() => setActiveModule('members')} className="nav-button">Member Management</button>
        <button onClick={() => setActiveModule('trainers')} className="nav-button">Trainer Management</button>
        <button onClick={() => setActiveModule('payments')} className="nav-button">Payment Management</button>
        <button onClick={() => setActiveModule('attendance')} className="nav-button">Attendance Tracking</button>
      </nav>
    </header>
  );
};

export default Header;
