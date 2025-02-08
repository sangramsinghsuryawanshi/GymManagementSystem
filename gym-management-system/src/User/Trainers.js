import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Trainers.css';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/trainers');
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  return (
    <div>
      <h2 className="module-title">Trainer List</h2>
      <table className="trainer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.id}</td>
              <td>{trainer.name}</td>
              <td>{trainer.specialty}</td>
              <td>{trainer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trainers;
