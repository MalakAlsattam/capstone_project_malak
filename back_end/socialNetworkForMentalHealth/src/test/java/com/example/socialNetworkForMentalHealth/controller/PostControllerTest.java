//package com.example.socialNetworkForMentalHealth.controller;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Post;
//import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
//import com.example.socialNetworkForMentalHealth.model.services.PostService;
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
//class PostControllerTest {
//    @Mock
//    PostService postServices;
//    @InjectMocks
//    PostController postController;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetPost() {
//        when(postServices.getPost()).thenReturn(Arrays.<Post>asList(new Post("title", "text", "image", new Specialist("specialistName", "password", "email", "image", 0, "moreInfo"))));
//
//        List<Post> result = postController.getPost();
//        Assertions.assertEquals(Arrays.<Post>asList(new Post("title", "text", "image", new Specialist("specialistName", "password", "email", "image", 0, "moreInfo"))), result);
//    }
//
//    @Test
//    void testRegisterNewsPost() {
//        postController.registerNewsPost(new Post("title", "text", "image", new Specialist("specialistName", "password", "email", "image", 0, "moreInfo")));
//    }
//
//    @Test
//    void testDeletePost() {
//        postController.deletePost("title");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme