import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/TrainerUser.css";

const TrainerUser = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/trainers");
      setTrainers(response.data);
    } catch (error) {
      console.error("Error fetching trainers:", error);
    }
  };

  return (
    <div className="trainer-container">
      <h2 className="module-title">Trainer Details</h2>
      <table className="trainer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer.trainer_id}>
              <td>{trainer.name}</td>
              <td>{trainer.specialization}</td>
              <td>{trainer.experience} years</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerUser;
