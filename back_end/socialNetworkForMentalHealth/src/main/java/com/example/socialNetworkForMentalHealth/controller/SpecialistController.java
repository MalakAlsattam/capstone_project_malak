package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
import com.example.socialNetworkForMentalHealth.model.services.SpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://localhost:3002")
@RestController
public class SpecialistController {
    private SpecialistService specialistService;
    @Autowired

    public SpecialistController(SpecialistService specialistService) {
        this.specialistService = specialistService;
    }
    @GetMapping("api/specialist")

    public List<Specialist> getSpecialist() {


        return specialistService.getSpecialist();
    }



    @PostMapping("api/specialist/add")

    public void registerNewspecialist(@RequestBody Specialist specialist) {
        specialistService.addNewspecialist(specialist);
    }

    @DeleteMapping(path = "delete/{specialistName}")
    public void deleteSpecialist(@PathVariable ("specialistName") String specialistName){
        specialistService.deleteSpecialist(specialistName);
    }



}
