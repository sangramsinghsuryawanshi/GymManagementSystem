import React, { useState} from 'react';
import axios from 'axios';
import '../CSS/Members.css';

const Members = () => {
    const [newMember, setNewMember] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      gender: '',
      dateOfBirth: '',
      membershipType: '',
      membershipStartDate: '',
      membershipEndDate: '',
      status: 'active'
    });
    const [message, setMessage] = useState('');
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewMember({ ...newMember, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8080/api/members', newMember);
        setMessage('Member created successfully!');
        setNewMember({
          name: '',
          email: '',
          phoneNumber: '',
          address: '',
          gender: '',
          dateOfBirth: '',
          membershipType: '',
          membershipStartDate: '',
          membershipEndDate: '',
          status: 'active'
        });
      } catch (error) {
        console.error('Error adding member:', error);
        setMessage('Failed to create member.');
      }
    };
  
    return (
      <div className="member-container">
        <h2 className="module-title">Member Management</h2>
  
        {message && <p className="message">{message}</p>}
  
        <form className="member-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={newMember.name} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" value={newMember.email} onChange={handleInputChange} required />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={newMember.phoneNumber} onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Address" value={newMember.address} onChange={handleInputChange} />
          <select name="gender" value={newMember.gender} onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={newMember.dateOfBirth} onChange={handleInputChange} />
          <input type="text" name="membershipType" placeholder="Membership Type" value={newMember.membershipType} onChange={handleInputChange} required />
          <label>Membership Start Date:</label>
          <input type="date" name="membershipStartDate" value={newMember.membershipStartDate} onChange={handleInputChange} required />
          <label>Membership End Date:</label>
          <input type="date" name="membershipEndDate" value={newMember.membershipEndDate} onChange={handleInputChange} />
          <select name="status" value={newMember.status} onChange={handleInputChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button type="submit">Add Member</button>
        </form>
      </div>
    );
  };
  
  export default Members;