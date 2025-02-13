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

	@Override
	public String isUpTrainer(int trainer_id, Trainer trainer) {
		Trainer trainer2 = trainerRepository.findById(trainer_id).orElse(null);
		if(trainer2!=null) {
			trainer2.setName(trainer.getName());
			trainer2.setEmail(trainer.getEmail());
			trainer2.setAddress(trainer.getAddress());
			trainer2.setExperience(trainer.getExperience());
			trainer2.setPhoneNumber(trainer.getPhoneNumber());
			trainer2.setSpecialization(trainer.getSpecialization());
			trainer2.setStatus(trainer.getStatus());
			trainerRepository.save(trainer2);
			return "updated";
		}else {
			return "not updated";
		}
	}

	@Override
	public String isDelTrainer(int trainerId) {
		if(trainerRepository.existsById(trainerId)) {
			trainerRepository.deleteById(trainerId);
			return "sucess";
		}else {
			return "failed";
		}
	}
	
}
