import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../AdminCSS/UpdateTrainer.css';

const UpdateTrainer = () => {
  const navigate = useNavigate();
  const storedTrainer = JSON.parse(localStorage.getItem('trainerToUpdate')) || {};
  console.log(storedTrainer);
  const [trainerData, setTrainerData] = useState({
    trainerId: storedTrainer.trainerId || '',
    name: storedTrainer.name || '',
    email: storedTrainer.email || '',
    address:storedTrainer.address || '',
    phoneNumber: storedTrainer.phoneNumber || '',
    specialization: storedTrainer.specialization || '',
    experience: storedTrainer.experience || '',
    status: storedTrainer.status || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerData({ ...trainerData, [name]: value });
  };

  const handleUpdate = async (e) => {
    console.log("Attempting to send PUT request with data:", trainerData);
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/admin/trainers/${trainerData.trainerId}`, trainerData);
      alert('Trainer updated successfully!');
      navigate('/admin/members');
    } catch (error) {
      console.error('Error updating trainer:', error);
      alert('Failed to update trainer.');
    }
  };

  return (
    <div className="update-container">
      <h2 className="module-title">Update Trainer</h2>
      <form className="update-form" onSubmit={handleUpdate}>
        
        <label>Name:</label>
        <input type="text" name="name" value={trainerData.name} onChange={handleInputChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={trainerData.email} onChange={handleInputChange} required />

        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={trainerData.phoneNumber} onChange={handleInputChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={trainerData.address} onChange={handleInputChange} required />

        <label>Specialization:</label>
        <input type="text" name="specialization" value={trainerData.specialization} onChange={handleInputChange} required />

        <label>Experience (Years):</label>
        <input type="number" name="experience" value={trainerData.experience} onChange={handleInputChange} required />

        <label>Status:</label>
        <select name="status" value={trainerData.status} onChange={handleInputChange} required>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button className='btn' type="submit">Update Trainer</button>
      </form>
    </div>
  );
};

export default UpdateTrainer;
