package com.GymManagementSystem.service;

import java.util.List;

import com.GymManagementSystem.model.ContactForm;

public interface ContactFormService {
	public String isCoFormCreate(ContactForm contactForm);
	public List<ContactForm> isCoFo();
	public String isConFoDel(int contactId);
}
