import React, { useState } from 'react';
import Header from './component/Header.js';  
import Members from './User/Members.js';
import Trainers from './User/Trainers.js';
import AttendanceTracking from './User/AttendanceTracking.js';
import './App.css';

const GymManagementSystem = () => {
  const [activeModule, setActiveModule] = useState('members');

  const renderModule = () => {
    switch (activeModule) {
      case 'members':
        return <Members />;
      case 'trainers':
        return <Trainers />;
      case 'payments':
        return <h2 className="module-title">Payment Management (Coming Soon)</h2>;
      case 'attendance':
        return <AttendanceTracking/>
        default:
        return <Members />;
    }
  };

  return (
    <div className="app-container">
      <Header setActiveModule={setActiveModule} />
      {renderModule()}
    </div>
  );
};

export default GymManagementSystem;
