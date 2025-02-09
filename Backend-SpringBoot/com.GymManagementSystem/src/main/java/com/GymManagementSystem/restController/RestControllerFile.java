package com.GymManagementSystem.restController;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GymManagementSystem.model.Members;
import com.GymManagementSystem.service.MembersService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RestControllerFile {
	
	 private static final Logger logger = LoggerFactory.getLogger(RestControllerFile.class);
	
	MembersService membersService;
	
	public RestControllerFile(MembersService membersService) {
		super();
		this.membersService = membersService;
	}
	@PostMapping("/signup")
	public ResponseEntity<String> isMemberApi(@RequestBody Members members) {
		String sucess = membersService.memberCreation(members);
		if(sucess.equals("Done")) {
			return new ResponseEntity<>("Member created successfully.!", HttpStatus.OK); 
		}
		else
		{
			return new ResponseEntity<>("Failed to create member.", HttpStatus.BAD_REQUEST); 
		}
	}
	@GetMapping("/members")
	public List<Members> isMemberGetApi() {
		return membersService.getMember();
	}
	@PostMapping("/login")
	public ResponseEntity<String> isLoginPutApi(@RequestBody Members members) {
		String message = membersService.isLogin(members);
		//logger.info("Login attempt for email: {}", members.getEmail());
		if(message.equals("Login Successfull")) {
			 logger.info("Login successful for email: {}", members.getEmail());
			return new ResponseEntity<>("user", HttpStatus.OK); 
		}else {
			logger.warn("Failed login attempt for email: {}", members.getEmail());
			return new ResponseEntity<>("Failed to Login.", HttpStatus.BAD_REQUEST); 
		}
	}
}
