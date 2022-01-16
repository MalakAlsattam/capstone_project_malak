package com.example.socialNetworkForMentalHealth.model.Repositry;

import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
import com.example.socialNetworkForMentalHealth.model.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentsRepositry extends JpaRepository<Comments,Integer > {

    @Query("SELECT c FROM Comments c where personalExperience.id = :personalExperienceId ")
    List<Comments> findComments(@Param("personalExperienceId") Integer personalExperienceId);
}
