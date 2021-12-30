package com.example.socialNetworkForMentalHealth.model.services;

import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
import com.example.socialNetworkForMentalHealth.model.Entities.Post;
import com.example.socialNetworkForMentalHealth.model.Repositry.PersonalExperienceRepositry;
import com.example.socialNetworkForMentalHealth.model.Repositry.PostRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalExperienceService {
    private PersonalExperienceRepositry personalExperienceRepositry;
    @Autowired

    public PersonalExperienceService(PersonalExperienceRepositry personalExperienceRepositry) {
        this.personalExperienceRepositry = personalExperienceRepositry;
    }
    public List<PersonalExperience> getPersonalEx() {
        return personalExperienceRepositry.findAll();

    }
    public void addNewsPersonalEx(PersonalExperience personalExperience){

        personalExperienceRepositry.save(personalExperience);
    }


    public void deletePersonalEx(Integer id) {
        personalExperienceRepositry.deleteById(id);}
}





