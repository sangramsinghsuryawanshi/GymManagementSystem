package com.GymManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainerId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    @Column
    private String specialization;

    @Column
    private String address;

    @Column(nullable = false)
    private String status = "active";  // Default status

    public Trainer() {
		super();
		
	}

	public Trainer(int trainerId, String name, String email, String phoneNumber, String specialization, String address, String status) {
        this.trainerId = trainerId;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.specialization = specialization;
        this.address = address;
        this.status = status;
    }

    // Getters and Setters
    public int getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(int trainerId) {
        this.trainerId = trainerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // toString method
    @Override
    public String toString() {
        return "Trainer [trainerId=" + trainerId + ", name=" + name + ", email=" + email 
            + ", phoneNumber=" + phoneNumber + ", specialization=" + specialization 
            + ", address=" + address + ", status=" + status + "]";
    }
}
