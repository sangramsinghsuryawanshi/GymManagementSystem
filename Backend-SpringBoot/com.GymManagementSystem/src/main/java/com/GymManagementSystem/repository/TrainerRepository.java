package com.GymManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GymManagementSystem.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
