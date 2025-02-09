import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Signup.css';

const Signup = () => {
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    gender: '',
    dateOfBirth: '',
    membershipType: '',
    membershipStartDate: new Date().toISOString().split('T')[0],
    membershipEndDate: '',
    status: 'active'
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/signup', newMember);
      setMessage('Member created successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 5000);  // Redirect after 5 seconds
    } catch (error) {
      console.error('Error adding member:', error);
      setMessage('Failed to create member.');
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

  return (
    <div className="member-container">
      <h2 className="module-title">Sign Up</h2>

      {message && <p className="message">{message}</p>}

      <form className="member-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newMember.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" value={newMember.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={newMember.password} onChange={handleInputChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={newMember.phoneNumber} onChange={handleInputChange} required />
        <input type="text" name="address" placeholder="Address" value={newMember.address} onChange={handleInputChange} />
        
        <select name="gender" value={newMember.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" max={today} value={newMember.dateOfBirth} onChange={handleInputChange} required />

        <input type="text" name="membershipType" placeholder="Membership Type" value={newMember.membershipType} onChange={handleInputChange} required />

        <label>Membership Start Date:</label>
        <input type="date" name="membershipStartDate" min={today} value={newMember.membershipStartDate} onChange={handleInputChange} required />

        <label>Membership End Date:</label>
        <input type="date" name="membershipEndDate" min={newMember.membershipStartDate ? new Date(new Date(newMember.membershipStartDate).setDate(new Date(newMember.membershipStartDate).getDate() + 1)).toISOString().split('T')[0] : tomorrow} value={newMember.membershipEndDate} onChange={handleInputChange} required />

        <select name="status" value={newMember.status} onChange={handleInputChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      <p className="redirect-link">
        Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
      </p>
    </div>
  );
};

export default Signup;
