package com.GymManagementSystem.service;

import java.util.List;

import com.GymManagementSystem.model.Members;

public interface MembersService {
	
	public String memberCreation(Members members);
	public List<Members> getMember();
	public Members isLogin(Members members);
	public String isUpMember(int member_id,Members members);
	public String isUserUp(int member_id,Members members);
	public String isDelMem(int member_id);
}
