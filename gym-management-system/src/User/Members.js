import React, { useState, useEffect } from 'react';
//import '../CSS/Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/members')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching members:', error));
  }, []);

  return (
    <div className="memb-container">
      <h2 className="module-title">Member Details</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Membership Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.member_id}>
              <td>{member.member_id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phoneNumber}</td>
              <td>{member.address}</td>
              <td>{member.gender}</td>
              <td>{member.dateOfBirth}</td>
              <td>{member.membershipType}</td>
              <td>{member.membershipStartDate}</td>
              <td>{member.membershipEndDate}</td>
              <td>{member.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
