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
	public Members isLogin(Members members) {
		String email = members.getEmail();
		String password = members.getPassword();
		Members members2 = memeberRpository.findByEmail(email);
		logger.debug("Checking login credentials for email: {}", members.getEmail());
		if(members2!=null && members2.getPassword().equals(password)) {
			logger.info("User authenticated successfully: {}", members.getEmail());
			return members2;
		}else {
			logger.error("Authentication failed for email: {}", members.getEmail());
			return null;
		}
	}

	@Override
	public String isUpMember(int member_id,Members members) {
		Members members2 = memeberRpository.findById(member_id).orElse(null);
		if(members2!=null) {
			members2.setName(members.getName());
			members2.setEmail(members.getEmail());
			members2.setAddress(members.getAddress());
			members2.setPassword(members.getPassword());
			members2.setGender(members.getGender());
			members2.setPhoneNumber(members.getPhoneNumber());
			members2.setDateOfBirth(members.getDateOfBirth());
			memeberRpository.save(members2);
			return "updated";
		}else {
			return "not updated";
		}
	}

	@Override
	public String isUserUp(int member_id, Members updatedMember) {
		Members members2 = memeberRpository.findById(member_id).orElse(null);
		if(members2!=null) {
			members2.setName(updatedMember.getName());
	        members2.setEmail(updatedMember.getEmail());
	        members2.setAddress(updatedMember.getAddress());
	        members2.setPassword(updatedMember.getPassword());
	        members2.setGender(updatedMember.getGender());
	        members2.setPhoneNumber(updatedMember.getPhoneNumber());
	        members2.setDateOfBirth(updatedMember.getDateOfBirth());
	        members2.setMembershipType(updatedMember.getMembershipType());
	        members2.setMembershipStartDate(updatedMember.getMembershipStartDate());
	        members2.setMembershipEndDate(updatedMember.getMembershipEndDate());
	        members2.setStatus(updatedMember.getStatus());
	        memeberRpository.save(members2);
	        return "updated";
		}else {
			return "not updated";
		}
	}

	@Override
	public String isDelMem(int member_id) {
		if(memeberRpository.existsById(member_id)) {
			memeberRpository.deleteById(member_id);
			return "sucess";
		}else {
			return "failed";
		}
	}
	
}
