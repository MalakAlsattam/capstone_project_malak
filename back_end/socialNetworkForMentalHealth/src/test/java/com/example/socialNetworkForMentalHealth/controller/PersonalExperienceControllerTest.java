//package com.example.socialNetworkForMentalHealth.controller;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
//import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.services.PersonalExperienceService;
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
//class PersonalExperienceControllerTest {
//    @Mock
//    PersonalExperienceService personalExperienceService;
//    @InjectMocks
//    PersonalExperienceController personalExperienceController;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetPersonalExperience() {
//        when(personalExperienceService.getPersonalEx()).thenReturn(Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(new Comments("comment", null, null))), Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), null)))));
//
//        List<PersonalExperience> result = personalExperienceController.getPersonalExperience();
//        Assertions.assertEquals(Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(new Comments("comment", null, null))), Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), null)))), result);
//    }
//
//    @Test
//    void testRegisterNewsPersonalEx() {
//        personalExperienceController.registerNewsPersonalEx(new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(new Comments("comment", null, null))), Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), null))));
//    }
//
//    @Test
//    void testDeletePersonalEx() {
//        personalExperienceController.deletePersonalEx("id");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme