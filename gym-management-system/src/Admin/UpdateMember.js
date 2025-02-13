import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../AdminCSS/UpdateMember.css';

const UpdateMember = () => {
  const navigate = useNavigate();
  const storedMember = JSON.parse(localStorage.getItem('memberToUpdate')) || {};
  console.log(storedMember);
  const [memberData, setMemberData] = useState({
    member_id: storedMember.member_id || '',
    name: storedMember.name || '',
    email: storedMember.email || '',
    password:storedMember.password || "",
    phoneNumber: storedMember.phoneNumber || '',
    address: storedMember.address || '',
    gender: storedMember.gender || '',
    dateOfBirth: storedMember.dateOfBirth || '',
    membershipType: storedMember.membershipType || '',
    membershipStartDate: storedMember.membershipStartDate || new Date().toISOString().split('T')[0],
    membershipEndDate: storedMember.membershipEndDate || '',
    status: storedMember.status || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleUpdate = async (e) => {
    console.log("Attempting to send PUT request with data:", memberData);
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/admin/members/${memberData.member_id}`, memberData);
      alert('Member updated successfully!');
      navigate('/admin/members'); // Redirect to members list
    } catch (error) {
      console.error('Error updating member:', error);
      alert('Failed to update member.');
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

  return (
    <div className="update-container-1">
      <h2 className="module-title-1">Update Member</h2>
      <form className="update-form-1" onSubmit={handleUpdate}>
        
        <label>Name:</label>
        <input type="text" name="name" value={memberData.name} onChange={handleInputChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={memberData.email} onChange={handleInputChange} required />

        <label>Password</label>
        <input type="text" name="password"  value={memberData.password} onChange={handleInputChange} />

        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={memberData.phoneNumber} onChange={handleInputChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={memberData.address} onChange={handleInputChange} required />

        <label>Gender:</label>
        <select name="gender" value={memberData.gender} onChange={handleInputChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" max={today} value={memberData.dateOfBirth} onChange={handleInputChange} required />

        <label>Membership Type:</label>
        <select name="membershipType" value={memberData.membershipType} onChange={handleInputChange} required>
          <option value="">Select Membership Type</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="VIP">VIP</option>
        </select>

        <label>Membership Start Date:</label>
        <input type="date" name="membershipStartDate" min={today} value={memberData.membershipStartDate} onChange={handleInputChange} required />

        <label>Membership End Date:</label>
        <input type="date" name="membershipEndDate" min={memberData.membershipStartDate ? new Date(new Date(memberData.membershipStartDate).setDate(new Date(memberData.membershipStartDate).getDate() + 1)).toISOString().split('T')[0] : tomorrow} value={memberData.membershipEndDate} onChange={handleInputChange} required />

        <label>Status:</label>
        <select name="status" value={memberData.status} onChange={handleInputChange} required>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button className='btn' type="submit">Update Member</button>
      </form>
    </div>
  );
};

export default UpdateMember;
