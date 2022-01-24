//package com.example.socialNetworkForMentalHealth.model.services;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
//import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.Repositry.UserRepositry;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static org.mockito.Mockito.*;
//
//class UserServiceTest {
//    @Mock
//    UserRepositry userRepositry;
//    @InjectMocks
//    UserService userService;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetUser() {
////        List<User> result = userService.getUser();
////        Assertions.assertEquals(Arrays.<User>asList(new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(new Comments("comment", null, null)))), Arrays.<Comments>asList(new Comments("comment", null, new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null)))))), result);
//        //when
//        userService.getUser();
//        //then
//        verify(userRepositry).findAll();
//    }
//
//    @Test
//    void testAddNewUser() {
//        Integer result = userService.addNewUser(new User("userName", null, null, null, null));
//        Assertions.assertEquals(Integer.valueOf(1), result);
//    }
//
//    @Test
//    void testCheckLogin() {
//        when(userRepositry.findRoles(anyString())).thenReturn("findRolesResponse");
//        when(userRepositry.findPassword(anyString())).thenReturn("findPasswordResponse");
//
//        String result = userService.checkLogin("userName", "password");
//        Assertions.assertEquals("please sign up", result);
//    }
//
//    @Test
//    void testDeleteUser() {
//        userService.deleteUser("userName");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme