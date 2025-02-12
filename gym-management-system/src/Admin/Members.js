import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../AdminCSS/Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/members/${id}`);
      setMembers(members.filter(member => member.member_id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const handleUpdate = (id) => {
    const memberToUpdate = members.find(member => member.member_id === id);
    localStorage.setItem('memberToUpdate', JSON.stringify(memberToUpdate));
    navigate('/update-member'); // Redirect to update page
  };

  return (
    <div className="memb-container">
      <h2 className="module-title">Member Details</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.member_id}>
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
              <td>
                <button className="update-btn" onClick={() => handleUpdate(member.member_id)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(member.member_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
