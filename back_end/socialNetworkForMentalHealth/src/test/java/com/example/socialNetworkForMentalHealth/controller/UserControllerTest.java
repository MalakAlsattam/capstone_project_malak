//package com.example.socialNetworkForMentalHealth.controller;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
//import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.Repositry.UserRepositry;
//import com.example.socialNetworkForMentalHealth.model.services.UserService;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.ArgumentCaptor;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
//import static org.mockito.Mockito.*;
//
//class UserControllerTest {
//    @Mock
//    UserService userService;
//    @Mock
//    UserRepositry userRepositry;
//    @InjectMocks
//    UserController userController;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetUser() {
//        when(userService.getUser()).thenReturn(Arrays.<User>asList(new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(new Comments("comment", null, null)))), Arrays.<Comments>asList(new Comments("comment", null, new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null)))))));
//
//        List<User> result = userController.getUser();
//        Assertions.assertEquals(Arrays.<User>asList(new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(new Comments("comment", null, null)))), Arrays.<Comments>asList(new Comments("comment", null, new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null)))))), result);
//    }
//
//    @Test
//    void testCheckLogin() {
//        when(userService.checkLogin(anyString(), anyString())).thenReturn("please sign up");
//
//        String result = userController.CheckLogin("userName", "password");
//        Assertions.assertEquals("please sign up", result);
//    }
//
//    @Test
//    void testRegisterNewUser() {
////        when(userService.addNewUser(any())).thenReturn(Integer.valueOf(1));
////
////        String result = userController.registerNewUser(new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(new Comments("comment", null, null)))), Arrays.<Comments>asList(new Comments("comment", null, new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))))));
////        Assertions.assertEquals("please sign up", result);
//        //given
//String name="haya";
//        String pass="123";
//        String roles="user";
//        User user = new User(name,pass,roles);
//        //when
//        userService.addNewUser(user);
//        //then
//        ArgumentCaptor<User> userArgumentCaptor =
//                ArgumentCaptor.forClass(User.class);
//        verify(userRepositry).save(userArgumentCaptor.capture());
//
//        User user1 = userArgumentCaptor.getValue();
//
//        assertThat(user1).isEqualTo(user);
//    }
//
//
//    @Test
//    void testDeleteUser() {
//        userController.deleteUser("haya");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme