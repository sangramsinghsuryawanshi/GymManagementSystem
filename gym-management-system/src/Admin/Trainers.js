import React, { useState } from "react";
import axios from "axios";
import "../AdminCSS/Trainers.css";

const Trainers = () => {
  const [newTrainer, setNewTrainer] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address:"",
    specialization: "",
    experience: "",
    status: "active",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrainer({ ...newTrainer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/trainers", newTrainer);
      setMessage("Trainer added successfully!");
      setNewTrainer({
        name: "",
        email: "",
        phoneNumber: "",
        address:"",
        specialization: "",
        experience: "",
        status: "active",
      });
    } catch (error) {
      console.error("Error adding trainer:", error);
      setMessage("Failed to add trainer.");
    }
  };

  return (
    <div className="trainers-container">
      <h2 className="module-title">Trainer Management</h2>

      {message && <p className="message">{message}</p>}

      <form className="trainer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newTrainer.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newTrainer.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={newTrainer.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={newTrainer.specialization}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="address"
          value={newTrainer.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience (in years)"
          value={newTrainer.experience}
          onChange={handleInputChange}
          required
        />
        <select name="status" value={newTrainer.status} onChange={handleInputChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">Add Trainer</button>
      </form>
    </div>
  );
};

export default Trainers;
