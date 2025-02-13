import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../AdminCSS/Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
    fetchTrainers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/trainers');
      console.log(response.data);
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  const handleDeleteMember = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this member?");
    if (confirmDelete) {
        try {
            await axios.delete(`http://localhost:8080/api/admin/del/members/${id}`);
            setMembers(members.filter(member => member.member_id !== id));
            alert("Member deleted successfully!");
        } catch (error) {
            console.error('Error deleting member:', error);
            alert("Failed to delete member.");
        }
    }
};

const handleDeleteTrainer = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this trainer?");
    if (confirmDelete) {
        try {
            await axios.delete(`http://localhost:8080/api/admin/del/trainers/${id}`);
            setTrainers(trainers.filter(trainer => trainer.trainerId !== id));
            alert("Trainer deleted successfully!");
        } catch (error) {
            console.error('Error deleting trainer:', error);
            alert("Failed to delete trainer.");
        }
    }
};


  const handleUpdateMember = (id) => {
    const memberToUpdate = members.find(member => member.member_id === id);
    localStorage.setItem('memberToUpdate', JSON.stringify(memberToUpdate));
    navigate('/update-member');
  };

  const handleUpdateTrainer = (id) => {
    console.log('Before',trainers);
    const trainerToUpdate = trainers.find(trainer => trainer.trainerId === id);
    console.log('After',trainerToUpdate);
    localStorage.setItem('trainerToUpdate', JSON.stringify(trainerToUpdate));
    navigate('/update-trainer');
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
                <button className="update-btn" onClick={() => handleUpdateMember(member.member_id)}>Update</button>
                <button className="delete-btn" onClick={() => handleDeleteMember(member.member_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="module-title">Trainer Details</h2>
      <table className="trainers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => (
            <tr key={trainer.trainerId}>
              <td>{trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{trainer.phoneNumber}</td>
              <td>{trainer.specialization}</td>
              <td>{trainer.experience}</td>
              <td>{trainer.address}</td>
              <td>{trainer.status}</td>
              <td>
                <button className="update-btn" onClick={() => handleUpdateTrainer(trainer.trainerId)}>Update</button>
                <button className="delete-btn" onClick={() => handleDeleteTrainer(trainer.trainerId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
