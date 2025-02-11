package com.GymManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GymManagementSystem.model.ContactForm;

@Repository
public interface ContactFormRepo extends JpaRepository<ContactForm, Integer> {

}
