package com.example.socialNetworkForMentalHealth.model.services;

import com.example.socialNetworkForMentalHealth.model.Entities.User;
import com.example.socialNetworkForMentalHealth.model.Repositry.UserRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    private UserRepositry userRepositry;
    @Autowired     //create obj when we need *must be her*
    public UserService(UserRepositry userRepositry) {
        this.userRepositry = userRepositry;
    }


    public List<User> getUser() {
        return userRepositry.findAll();

    }
    public Integer addNewUser(User user){
        if(userRepositry.existsById(user.getUserName())){
            //System.out.println("User already in database");
            return 0;
        }
        else{
            userRepositry.save(user);
            return 1;
        }

    }

//    public String checkLogin(String userName,String passWord){
//        if(userRepositry.existsById(userName)){
//            String pass= userRepositry.findPassword(userName);
//
//            if(pass.equals(passWord)){
//                return "authenticated";
//            }
//            else{
//                return "Nottt authenticated";
//            }
//
//        }
//        return "Not authenticated";
//    }
    public void deleteUser(String userName) {
        userRepositry.deleteById(userName);}
}
