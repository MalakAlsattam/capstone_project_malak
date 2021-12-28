package com.example.socialNetworkForMentalHealth.model.Repositry;

import com.example.socialNetworkForMentalHealth.model.Entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepositry extends JpaRepository<Post,String > {
}
