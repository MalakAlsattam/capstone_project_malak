package com.example.socialNetworkForMentalHealth.model.services;

import com.example.socialNetworkForMentalHealth.model.Entities.User;
import com.example.socialNetworkForMentalHealth.model.Repositry.UserRepositry;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
//import java.util.Optional;


@Service
public class UserService  {

    private UserRepositry userRepositry;
    @Autowired     //create obj when we need *must be her*
    public UserService(UserRepositry userRepositry) {
        this.userRepositry = userRepositry;
    }
//    public MyUserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
//        Optional<User> user = userRepositry.findByUserName(userName);
//
//        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));
//
//        return user.map(MyUserDetails::new).get();
//    }

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

    public String checkLogin(String userName,String password){
        if(userRepositry.existsById(userName)){
            String pass= userRepositry.findPassword(userName);

            if(pass.equals(password)){
                String role= userRepositry.findRoles(userName);

                return "authenticated"+ role;
            }
            else{
                return "password Does not match";
            }

        }
        return "please sign up";
    }
    public void deleteUser(String userName) {
        userRepositry.deleteById(userName);}
}
