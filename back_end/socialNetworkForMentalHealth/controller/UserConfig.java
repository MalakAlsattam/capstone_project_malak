//package com.example.socialNetworkForMentalHealth.controller;
//
//
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.Repositry.UserRepositry;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import java.util.List;
//@Configuration
//public class UserConfig {
//    @Bean  //the java will handel of that object
//    CommandLineRunner commandLineRunner (UserRepositry repository){
//        return  args -> {
//            User malak =   new User ("malak","1234","ADMIN");
//
//            repository.saveAll(List.of(malak));
//        };
//    }
//}
