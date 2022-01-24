package com.example.socialNetworkForMentalHealth.model.Repositry;

import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalExperienceRepositry extends JpaRepository<PersonalExperience,Integer > {
}
