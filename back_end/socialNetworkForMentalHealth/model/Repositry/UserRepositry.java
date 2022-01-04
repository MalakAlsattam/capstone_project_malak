package com.example.socialNetworkForMentalHealth.model.Repositry;


import com.example.socialNetworkForMentalHealth.model.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepositry extends JpaRepository<User,String > {
    @Query("SELECT roles FROM User  where userName = :userName")
    String findRoles(@Param("userName") String userName);

    @Query("SELECT password FROM User  where userName = :userName")
    String findPassword(@Param("userName") String userName);



}
