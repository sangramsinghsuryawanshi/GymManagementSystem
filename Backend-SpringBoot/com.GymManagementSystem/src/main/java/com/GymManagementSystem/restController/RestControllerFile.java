package com.GymManagementSystem.restController;

import java.util.List;

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
	
	MembersService membersService;
	
	public RestControllerFile(MembersService membersService) {
		super();
		this.membersService = membersService;
	}
	@PostMapping("/members")
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
}
