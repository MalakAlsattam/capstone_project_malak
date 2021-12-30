package com.example.socialNetworkForMentalHealth.model.Repositry;

import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
import com.example.socialNetworkForMentalHealth.model.Entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepositry extends JpaRepository<Comments,Integer > {
}
