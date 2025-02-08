package com.GymManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.GymManagementSystem.model.Members;
import com.GymManagementSystem.repository.MemeberRpository;

@Service
public class MembersImpl implements MembersService {

	MemeberRpository memeberRpository;
	
	public MembersImpl(MemeberRpository memeberRpository) {
		super();
		this.memeberRpository = memeberRpository;
	}

	@Override
	public String memberCreation(Members members) {
		memeberRpository.save(members);
		return "Done";
	}

	@Override
	public List<Members> getMember() {
		return memeberRpository.findAll();
	}
	
}
