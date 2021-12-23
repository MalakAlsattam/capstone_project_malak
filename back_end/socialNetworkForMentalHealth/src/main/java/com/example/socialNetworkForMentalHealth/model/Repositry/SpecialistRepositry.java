package com.example.socialNetworkForMentalHealth.model.Repositry;


import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialistRepositry  extends JpaRepository<Specialist,String > {
}
