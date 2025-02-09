package com.GymManagementSystem.service;

import java.util.List;

import com.GymManagementSystem.model.Members;

public interface MembersService {
	
	public String memberCreation(Members members);
	public List<Members> getMember();
	public String isLogin(Members members);
}
