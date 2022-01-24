//package com.example.socialNetworkForMentalHealth.controller;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
//import com.example.socialNetworkForMentalHealth.model.services.SpecialistService;
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
//class SpecialistControllerTest {
//    @Mock
//    SpecialistService specialistService;
//    @InjectMocks
//    SpecialistController specialistController;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetSpecialist() {
//        when(specialistService.getSpecialist()).thenReturn(Arrays.<Specialist>asList(new Specialist("specialistName", "password", "email", "image", 0, "moreInfo")));
//
//        List<Specialist> result = specialistController.getSpecialist();
//        Assertions.assertEquals(Arrays.<Specialist>asList(new Specialist("specialistName", "password", "email", "image", 0, "moreInfo")), result);
//    }
//
//    @Test
//    void testRegisterNewspecialist() {
//        specialistController.registerNewspecialist(new Specialist("specialistName", "password", "email", "image", 0, "moreInfo"));
//    }
//
//    @Test
//    void testDeleteSpecialist() {
//        specialistController.deleteSpecialist("specialistName");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme