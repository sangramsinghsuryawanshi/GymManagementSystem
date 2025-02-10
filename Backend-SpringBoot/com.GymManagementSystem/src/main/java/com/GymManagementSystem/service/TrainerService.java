package com.GymManagementSystem.service;

import java.util.List;

import com.GymManagementSystem.model.Trainer;

public interface TrainerService {
	public String isTrinerCreation(Trainer trainer);
	public List<Trainer> isGetTrainer();
}
