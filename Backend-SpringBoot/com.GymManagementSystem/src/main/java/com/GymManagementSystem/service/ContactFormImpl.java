package com.GymManagementSystem.service;

import org.springframework.stereotype.Service;

import com.GymManagementSystem.model.ContactForm;
import com.GymManagementSystem.repository.ContactFormRepo;

@Service
public class ContactFormImpl implements ContactFormService {

	ContactFormRepo contactFormRepo;
	
	public ContactFormImpl(ContactFormRepo contactFormRepo) {
		super();
		this.contactFormRepo = contactFormRepo;
	}

	@Override
	public String isCoFormCreate(ContactForm contactForm) {
		if(contactForm!=null) {
			contactFormRepo.save(contactForm);
			return "message sent successful.!";
		}else {
			return "Message falies to sent.";
		}
	}

}
