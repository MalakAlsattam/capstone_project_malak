//package com.example.socialNetworkForMentalHealth.model.services;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
//import com.example.socialNetworkForMentalHealth.model.Entities.PersonalExperience;
//import com.example.socialNetworkForMentalHealth.model.Entities.User;
//import com.example.socialNetworkForMentalHealth.model.Repositry.CommentsRepositry;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.ArgumentCaptor;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static org.mockito.Mockito.*;
//
//class CommentsServiceTest {
//    @Mock
//    CommentsRepositry commentsRepositry;
//    @InjectMocks
//    CommentsService commentsService;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetComment() {
////        List<Comments> result = commentsService.getComment();
////        Assertions.assertEquals(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))), result);
//
//        //when
//        commentsService.getComment();
//        //then
//        verify(commentsRepositry).findAll();
//    }
//
//    @Test
//    void testCheckComments() {
//        when(commentsRepositry.findComments(anyInt())).thenReturn(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))));
//
//        List<Comments> result = commentsService.checkComments(Integer.valueOf(0));
//        Assertions.assertEquals(Arrays.<Comments>asList(new Comments("comment", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(new PersonalExperience("text", "image", null, Arrays.<Comments>asList(null))), Arrays.<Comments>asList(null)), new PersonalExperience("text", "image", new User("userName", "password", "roles", Arrays.<PersonalExperience>asList(null), Arrays.<Comments>asList(null)), Arrays.<Comments>asList(null)))), result);
//    }
//
////    @Test
////    void testAddNewComments() {
////        commentsService.addNewComments(new Comments("good"));
////    }
//@Test
//void testAddNewComments() {
//    //given
//    String comment = "hi";
//    Comments comment1 = new Comments(comment);
//    //when
//    commentsService.addNewComments(comment1);
//    //then
//    ArgumentCaptor<Comments> commentArgumentCaptor =
//            ArgumentCaptor.forClass(Comments.class);
//    verify(commentsRepositry).save(commentArgumentCaptor.capture());
//
//    Comments capturedStudent = commentArgumentCaptor.getValue();
//
//    assertThat(capturedStudent).isEqualTo(comment);
//}
//    @Test
//    void testDeleteComments() {
//        commentsService.deleteComments(Integer.valueOf(1));
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme