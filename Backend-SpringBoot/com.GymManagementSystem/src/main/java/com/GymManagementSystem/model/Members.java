package com.GymManagementSystem.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Members 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int member_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;  // New Password Field

    @Column(nullable = false)
    private String phoneNumber;

    @Column
    private String address;

    @Column
    private String gender;

    @Column
    private LocalDate dateOfBirth;

    @Column(nullable = false)
    private String membershipType;

    @Column(nullable = false)
    private LocalDate membershipStartDate;

    @Column
    private LocalDate membershipEndDate;

    @Column(nullable = false)
    private String status = "active";

    // Getters and Setters
    public int getMember_id() { return member_id; }
    public void setMember_id(int member_id) { this.member_id = member_id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getMembershipType() { return membershipType; }
    public void setMembershipType(String membershipType) { this.membershipType = membershipType; }

    public LocalDate getMembershipStartDate() { return membershipStartDate; }
    public void setMembershipStartDate(LocalDate membershipStartDate) { this.membershipStartDate = membershipStartDate; }

    public LocalDate getMembershipEndDate() { return membershipEndDate; }
    public void setMembershipEndDate(LocalDate membershipEndDate) { this.membershipEndDate = membershipEndDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    // Constructors
    public Members(int member_id, String name, String email, String password, String phoneNumber, String address, String gender,
                   LocalDate dateOfBirth, String membershipType, LocalDate membershipStartDate, LocalDate membershipEndDate,
                   String status) {
        super();
        this.member_id = member_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.membershipType = membershipType;
        this.membershipStartDate = membershipStartDate;
        this.membershipEndDate = membershipEndDate;
        this.status = status;
    }

    public Members() {
        super();
    }

    @Override
    public String toString() {
        return "Members [member_id=" + member_id + ", name=" + name + ", email=" + email + 
               ", password=" + password + ", phoneNumber=" + phoneNumber + ", address=" + address + 
               ", gender=" + gender + ", dateOfBirth=" + dateOfBirth + ", membershipType=" + membershipType + 
               ", membershipStartDate=" + membershipStartDate + ", membershipEndDate=" + membershipEndDate + 
               ", status=" + status + "]";
    }
}
