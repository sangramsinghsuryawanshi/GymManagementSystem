package com.GymManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.GymManagementSystem.model.Trainer;
import com.GymManagementSystem.repository.TrainerRepository;

@Service
public class TrainerImpl implements TrainerService {

	TrainerRepository trainerRepository;
	
	public TrainerImpl(TrainerRepository trainerRepository) {
		super();
		this.trainerRepository = trainerRepository;
	}

	@Override
	public String isTrinerCreation(Trainer trainer) {
		if(trainer!=null) {
			trainerRepository.save(trainer);
			return "Trainer creates successfully...";
		}else {
			return "Trainer failed to create...";
		}
	}

	@Override
	public List<Trainer> isGetTrainer() {
		return trainerRepository.findAll();
	}
	
}
