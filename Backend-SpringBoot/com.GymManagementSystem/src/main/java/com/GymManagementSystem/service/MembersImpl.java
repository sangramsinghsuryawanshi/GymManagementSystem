package com.GymManagementSystem.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.GymManagementSystem.model.Members;
import com.GymManagementSystem.repository.MemeberRpository;
import com.GymManagementSystem.restController.RestControllerFile;

@Service
public class MembersImpl implements MembersService {

	 private static final Logger logger = LoggerFactory.getLogger(RestControllerFile.class);
	
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

	@Override
	public String isLogin(Members members) {
		String email = members.getEmail();
		String password = members.getPassword();
		Members members2 = memeberRpository.findByEmail(email);
		logger.debug("Checking login credentials for email: {}", members.getEmail());
		if(members2!=null && members2.getPassword().equals(password)) {
			logger.info("User authenticated successfully: {}", members.getEmail());
			return "Login Successfull";
		}else {
			logger.error("Authentication failed for email: {}", members.getEmail());
			return "Login Failed";
		}
	}
	
}
