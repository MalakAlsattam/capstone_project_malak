package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
import com.example.socialNetworkForMentalHealth.model.services.PersonalExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//import java.util.Optional;

@CrossOrigin(origins = "https://help-hope.herokuapp.com")
@RestController
public class PersonalExperienceController {
    private PersonalExperienceService personalExperienceService ;
    @Autowired

    public PersonalExperienceController(PersonalExperienceService personalExperienceService) {
        this.personalExperienceService = personalExperienceService;
    }
    @GetMapping("api/personalExperience")

    public List<PersonalExperience> getPersonalExperience() {


        return personalExperienceService.getPersonalEx();
    }



    @PostMapping("api/personalExperience/add")

    public void registerNewsPersonalEx(@RequestBody PersonalExperience personalExperience) {
        personalExperienceService.addNewsPersonalEx(personalExperience);
    }

    @DeleteMapping(path = "api/PEx/delete/{id}")
    public void deletePersonalEx(@PathVariable ("id") String id){
        int PersonalExId=Integer.parseInt(id);
        personalExperienceService.deletePersonalEx(PersonalExId);
    }



}



