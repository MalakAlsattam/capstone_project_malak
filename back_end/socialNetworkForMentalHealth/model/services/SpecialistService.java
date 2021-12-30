package com.example.socialNetworkForMentalHealth.model.services;
import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
import com.example.socialNetworkForMentalHealth.model.Repositry.SpecialistRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialistService {
    private SpecialistRepositry specialistRepositry;
    @Autowired

    public SpecialistService(SpecialistRepositry specialistRepositry) {
        this.specialistRepositry = specialistRepositry;
    }
    public List<Specialist> getSpecialist() {
        return specialistRepositry.findAll();

    }
    public void addNewspecialist(Specialist specialist){

        specialistRepositry.save(specialist);
    }


    public void deleteSpecialist(String id) {
        specialistRepositry.deleteById(id);}
}

