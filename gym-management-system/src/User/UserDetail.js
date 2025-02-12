import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/UserDetail.css';

const UserDetail = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  console.log('single user: ',user);
  const [userData, setUserData] = useState({
    id:user.id,
    name: user.name || "",
    email: user.email || "",
    password:user.password || "",
    phoneNumber:user.phoneNumber || "",
    address:user.address || "",
    gender:user.gender || "",
    dateOfBirth:user.dateOfBirth || "",
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/UserDetail/${user.id}`, userData);
      console.log("User I:", userData.id);
      localStorage.setItem("user", JSON.stringify(userData));

    // Update the state with new data
      setUserData({ ...userData });
      setMessage('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Failed to update user.');
    }
  };

  const today = new Date().toISOString().split('T')[0];
  return (
    <div className="user-container">
      <h2 className="module-title">Update User</h2>

      {message && <p className="message">{message}</p>}

      <form className="user-form" onSubmit={handleUpdate}>
        <input type="text" name="name"  value={userData.name} onChange={handleInputChange} />
        <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        <input type="text" name="password"  value={userData.password} onChange={handleInputChange} />
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

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserDetail;
