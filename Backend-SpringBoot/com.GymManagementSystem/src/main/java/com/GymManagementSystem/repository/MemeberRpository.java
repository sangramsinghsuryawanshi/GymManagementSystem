package com.GymManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GymManagementSystem.model.Members;

@Repository
public interface MemeberRpository extends JpaRepository<Members, Integer> {
	public Members findByEmail(String email);
}
