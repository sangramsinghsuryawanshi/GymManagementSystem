package com.GymManagementSystem.service;

import java.util.List;

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

	@Override
	public List<ContactForm> isCoFo() {
		return contactFormRepo.findAll();
	}

	@Override
	public String isConFoDel(int contactId) {
		if(contactFormRepo.existsById(contactId)) {
			contactFormRepo.deleteById(contactId);
			return "sucess";
		}else {
			return "failed";
		}
	}

}
