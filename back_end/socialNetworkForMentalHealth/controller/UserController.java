package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.User;
import com.example.socialNetworkForMentalHealth.model.services.UserService;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "https://localhost:8080")
@RestController
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }




    @GetMapping("api/user")
    //Teacher between <> is a dataType and can be a class
    public List<User> getUser() {


        return userService.getUser();//getteacher method return list of teacher
    }

    @GetMapping("api/user/login")
    public String CheckLogin(@RequestParam(name="userName") String userName, @RequestParam(name="passWord")String passWord){

        return userService.checkLogin(userName,passWord);
    }

    @PostMapping("api/user/add")
    @ResponseBody
    public String registerNewUser(@RequestBody User user){
        int result = userService.addNewUser(user);
        if(result == 0){
          return "username already exist";
        }
        else{
            return "login successfully";
        }
    }

    @DeleteMapping(path = "delete/{userName}")
    public void deleteUser(@PathVariable ("userName") String userName){
        userService.deleteUser(userName);
    }



}


