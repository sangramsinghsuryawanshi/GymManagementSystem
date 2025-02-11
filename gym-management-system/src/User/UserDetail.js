import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/UserDetail.css';

const UserDetail = () => {
  const { userId } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  console.log('single user: ',user);
  const [userData, setUserData] = useState({
    id:user.id,
    name: user.name || "",
    email: user.email || "",
    phoneNumber:user.phoneNumber || "",
    address:user.address || "",
    gender:user.gender || "",
    dateOfBirth:user.dateOfBirth || "",
    membershipType:user.membershipType || "",
    membershipStartDate:user.membershipStartDate || new Date().toISOString().split("T")[0],
    membershipEndDate:user.membershipEndDate || "",
    status: user.status || "active",
  });

  const [message, setMessage] = useState('');

  // Fetch user details for update
  useEffect(() => {
    if (!user.name && userId) {
      fetchUserDetails(userId);
    }
  }, [userId, user.name]);

  const fetchUserDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/UserDetail/${id}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setMessage("Failed to load user details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/UserDetail/${user.id}`, userData);
      console.log("User I:", userData.id);
      setMessage('User updated successfully!');
      setTimeout(() => navigate('/users'), 3000); // Redirect after 3 seconds
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Failed to update user.');
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
  return (
    <div className="user-container">
      <h2 className="module-title">Update User</h2>

      {message && <p className="message">{message}</p>}

      <form className="user-form" onSubmit={handleUpdate}>
        <input type="text" name="name"  value={userData.name} onChange={handleInputChange} />
        <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} />
        <input type="text" name="address" value={userData.address} onChange={handleInputChange} />

        <select name="gender" value={userData.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" max={today} value={userData.dateOfBirth} onChange={handleInputChange} />

        <input type="text" name="membershipType" value={userData.membershipType} onChange={handleInputChange} />

        <label>Membership Start Date:</label>
        <input type="date" name="membershipStartDate" min={today} value={userData.membershipStartDate} onChange={handleInputChange} />

        <label>Membership End Date:</label>
        <input type="date" name="membershipEndDate"  min={userData.membershipStartDate ? new Date(new Date(userData.membershipStartDate).setDate(new Date(userData.membershipStartDate).getDate() + 1)).toISOString().split('T')[0] : tomorrow} value={userData.membershipEndDate} onChange={handleInputChange} />

        <select name="status" value={userData.status} onChange={handleInputChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserDetail;
