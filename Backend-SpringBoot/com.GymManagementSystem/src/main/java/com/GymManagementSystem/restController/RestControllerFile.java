package com.GymManagementSystem.restController;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GymManagementSystem.model.ContactForm;
import com.GymManagementSystem.model.Members;
import com.GymManagementSystem.model.Trainer;
import com.GymManagementSystem.service.ContactFormService;
import com.GymManagementSystem.service.MembersService;
import com.GymManagementSystem.service.TrainerService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RestControllerFile {
	
	 private static final Logger logger = LoggerFactory.getLogger(RestControllerFile.class);
	
	MembersService membersService;
	
	TrainerService trainerService;
	
	ContactFormService contactFormService;
	
	
	public RestControllerFile(MembersService membersService, TrainerService trainerService,
			ContactFormService contactFormService) {
		super();
		this.membersService = membersService;
		this.trainerService = trainerService;
		this.contactFormService = contactFormService;
	}
	
	// Login And SignUp Part 
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
	@PostMapping("/login")
	public ResponseEntity<Members> isLoginPutApi(@RequestBody Members members) {
		Members message = membersService.isLogin(members);
		//logger.info("Login attempt for email: {}", members.getEmail());
			logger.info("Login successful for email: {}", message.toString());
			return new ResponseEntity<Members>(message, HttpStatus.OK);
			//logger.warn("Failed login attempt for email: {}", members.getEmail());
	}
	
	//User Part
	@GetMapping("/members")
	public List<Members> isMemberGetApi() {
		return membersService.getMember();
	}
	@PostMapping("/contact")
	public ResponseEntity<String> isContactFormApi(@RequestBody ContactForm contactForm) {
		String message = contactFormService.isCoFormCreate(contactForm);
		//logger.debug("message: "+message);
		if(message.equals("message sent successful.!")) {
			return new ResponseEntity<String>(message, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
		}
	}
//	@GetMapping("/UserDetail/{member_id}")
//	public ResponseEntity<Members> isFetchApiMemeber(@PathVariable int member_id){
//		logger.info("member id: "+member_id);
//		return null;
//	}
	@PutMapping("/UserDetail/{member_id}")
	public ResponseEntity<String> isUpPutMemApi(@PathVariable int member_id, @RequestBody Members members){
		String message = membersService.isUpMember(member_id,members);
		logger.info("members detalis from frontend:\n"+members.toString());
		//logger.info(member_id);
		if(message.equals("updated")) {
			return new ResponseEntity<String>(message, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
		}
	}
	
	
	// Admin Part
	@PostMapping("/trainers")
	public ResponseEntity<String> isTrainerPostApi(@RequestBody Trainer trainer){
		String message = trainerService.isTrinerCreation(trainer);
		if(message.equals("Trainer creates successfully...")) {
			return new ResponseEntity<String>(message, HttpStatus.OK);
		}else {
			return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST); 
		}
	}
	@PutMapping("/admin/members/{member_id}")
	public ResponseEntity<String> updateMember(@PathVariable int member_id, @RequestBody Members updatedMember) {
		logger.info("PUT API hit with member_id: {}", member_id); // Log API hit
        logger.info("Received data: {}", updatedMember.toString());
        String message = membersService.isUserUp(member_id, updatedMember);
        if(message.equals("updated")) {
        	return new ResponseEntity<String>(message, HttpStatus.OK);
        }else {
        	return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
        }
	}
	@PutMapping("/admin/trainers/{trainer_id}")
	public ResponseEntity<String> updateTrainerApi(@PathVariable int trainer_id, @RequestBody Trainer updatedTrainer) {
		logger.info("PUT API hit with member_id: {}", trainer_id); // Log API hit
        logger.info("Received data: {}", updatedTrainer.toString());
        String message = trainerService.isUpTrainer(trainer_id, updatedTrainer);
        if(message.equals("updated")) {
        	return new ResponseEntity<String>(message, HttpStatus.OK);
        }else {
        	return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
        }
	}
	@GetMapping("/admin/trainers")
	public List<Trainer> isAdminTrainerPutApi(){
		return trainerService.isGetTrainer();
	}
	@GetMapping("/admin/members")
	public List<Members> isAdminMemberGetApi() {
		return membersService.getMember();
	}
	@DeleteMapping("/admin/del/members/{member_id}")
	public ResponseEntity<String> isMemDelApi(@PathVariable int member_id){
		String message = membersService.isDelMem(member_id);
		if(message.equals("sucess")) {
			return new ResponseEntity<String>(message, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
		}
	}
	@DeleteMapping("/admin/del/trainers/{trainerId}")
	public ResponseEntity<String> isTrainerDelApi(@PathVariable int trainerId){
		String message = trainerService.isDelTrainer(trainerId);
		if(message.equals("sucess")) {
			return new ResponseEntity<String>(message, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping("/admin/contact")
	public List<ContactForm> isCoFoGetApi(){
		return contactFormService.isCoFo();
	}
	@DeleteMapping("/admin/del/contact/{contactId}")
	public ResponseEntity<String> isConFoDelApi(@PathVariable int contactId){
		String message = contactFormService.isConFoDel(contactId);
		logger.info("Del API:{}",contactId);
		if(message.equals("sucess")) {
			return new ResponseEntity<String>(message, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>(message, HttpStatus.BAD_REQUEST);
		}
	}
	
}
