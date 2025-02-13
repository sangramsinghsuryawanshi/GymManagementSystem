import React from "react";

import "../AdminCSS/AdminPanel.css";

const AdminPanel = () => {

  return (
    <div className="admin-panel">
      <div className="admin-header-1">
        <h2>Welcome to the Gym Admin Panel</h2>
        <p>Manage gym operations, members, trainers, and more.</p>
      </div>

      <div className="admin-sections">
        <div className="admin-card" >
          <img src="/images/members.jpg" alt="Members" />
          <h3>Manage Members</h3>
          <p>View, add, update, or remove gym members.</p>
        </div>

        <div className="admin-card" >
          <img src="/images/gym_trainer.jpg" alt="Trainers" />
          <h3>Manage Trainers</h3>
          <p>View and assign trainers to members.</p>
        </div>

        <div className="admin-card" >
          <img src="/images/Groupclasses.jpg" alt="Classes" />
          <h3>Manage Classes</h3>
          <p>Schedule, edit, and organize gym classes.</p>
        </div>

        {/* <div className="admin-card" >
          <img src="/images/yoga.jpg" alt="Payments" />
          <h3>Manage Payments</h3>
          <p>View and handle membership payments.</p>
        </div> */}
      </div>
    </div>
  );
};

export default AdminPanel;
