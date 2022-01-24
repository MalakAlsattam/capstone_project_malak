//package com.example.socialNetworkForMentalHealth.controller;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
//import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.services.CommentsService;
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
//class CommentsControllerTest {
//    @Mock
//    CommentsService commentsService;
//    @InjectMocks
//    CommentsController commentsController;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetComment() {
//        when(commentsService.getComment()).thenReturn(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))));
//
//        List<Comments> result = commentsController.getComment();
//        Assertions.assertEquals(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))), result);
//    }
//
//    @Test
//    void testCheckComments() {
//        when(commentsService.checkComments(anyInt())).thenReturn(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))));
//
//        List<Comments> result = commentsController.checkComments(Integer.valueOf(0));
//        Assertions.assertEquals(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))), result);
//    }
//
//    @Test
//    void testRegisterNewComment() {
//        commentsController.registerNewComment(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null))));
//    }
//
//    @Test
//    void testDeleteComment() {
//        commentsController.deleteComment(Integer.valueOf(1));
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme