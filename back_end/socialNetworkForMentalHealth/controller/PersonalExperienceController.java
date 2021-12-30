package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
import com.example.socialNetworkForMentalHealth.model.Entities.Post;
import com.example.socialNetworkForMentalHealth.model.services.PersonalExperienceService;
import com.example.socialNetworkForMentalHealth.model.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @DeleteMapping(path = "api/PersonalEx/delete/{id}")
    public void deletePersonalEx(@PathVariable ("id") Integer id){
        personalExperienceService.deletePersonalEx(id);
    }



}



