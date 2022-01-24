//package com.example.socialNetworkForMentalHealth.model.services;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
//import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.Repositry.PersonalExperienceRepositry;
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
//class PersonalExperienceServiceTest {
//    @Mock
//    PersonalExperienceRepositry personalExperienceRepositry;
//    @InjectMocks
//    PersonalExperienceService personalExperienceService;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetPersonalEx() {
////        List<PersonalExperience> result = personalExperienceService.getPersonalEx();
////        Assertions.assertEquals(Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(new Comments("comment", null, null))), Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), null)))), result);
//        //when
//        personalExperienceService.getPersonalEx();
//        //then
//        verify(personalExperienceRepositry).findAll();
//    }
//
//    @Test
//    void testAddNewsPersonalEx() {
////        personalExperienceService.addNewsPersonalEx(new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(new Comments("comment", null, null))), Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), null))));
//        //given
//        String text = "hi";
//        String image="dj";
//        PersonalExperience PE = new PersonalExperience(text,image);
//        //when
//        personalExperienceService.addNewsPersonalEx(PE);
//        //then
//        ArgumentCaptor<PersonalExperience> PersonalArgumentCaptor =
//                ArgumentCaptor.forClass(PersonalExperience.class);
//        verify(personalExperienceRepositry).save(PersonalArgumentCaptor.capture());
//
//        PersonalExperience capturedPE = PersonalArgumentCaptor.getValue();
//
//        assertThat(capturedPE).isEqualTo(PE);
//    }
//
//    @Test
//    void testDeletePersonalEx() {
//        personalExperienceService.deletePersonalEx(Integer.valueOf(0));
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme