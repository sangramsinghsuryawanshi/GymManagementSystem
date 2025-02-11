package com.GymManagementSystem.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ContactForm {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contactId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String message;

	public int getContactId() {
		return contactId;
	}

	public void setContactId(int contactId) {
		this.contactId = contactId;
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

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public ContactForm(int contactId, String name, String email, String message) {
		super();
		this.contactId = contactId;
		this.name = name;
		this.email = email;
		this.message = message;
	}

	public ContactForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ContactForm [contactId=" + contactId + ", name=" + name + ", email=" + email + ", message=" + message
				+ "]";
	}
    
    
}
