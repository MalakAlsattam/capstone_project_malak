//package com.example.socialNetworkForMentalHealth.model.services;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
//import com.example.socialNetworkForMentalHealth.model.Repositry.SpecialistRepositry;
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
//class SpecialistServiceTest {
//    @Mock
//    SpecialistRepositry specialistRepositry;
//    @InjectMocks
//    SpecialistService specialistService;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetSpecialist() {
////        List<Specialist> result = specialistService.getSpecialist();
////        Assertions.assertEquals(Arrays.<Specialist>asList(new Specialist("ali", null, "ali@gmail.com", "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI=",
////                34567890, null)), result);
//        //when
//        specialistService.getSpecialist();
//        //then
//        verify(specialistRepositry).findAll();
//    }
//
//    @Test
//    void testAddNewspecialist() {
//        specialistService.addNewspecialist(new Specialist("specialistName", "password", "email", "image", 0, "moreInfo"));
//    }
//
//    @Test
//    void testDeleteSpecialist() {
//        specialistService.deleteSpecialist("id");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme