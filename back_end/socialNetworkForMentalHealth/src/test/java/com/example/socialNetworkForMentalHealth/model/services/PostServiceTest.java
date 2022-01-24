//package com.example.socialNetworkForMentalHealth.model.services;
//
//import com.example.socialNetworkForMentalHealth.model.Entities.Post;
//import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
//import com.example.socialNetworkForMentalHealth.model.Repositry.PostRepositry;
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
//class PostServiceTest {
//    @Mock
//    PostRepositry postRepositry;
//    @InjectMocks
//    PostService postService;
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    void testGetPost() {
////        List<Post> result = postService.getPost();
////        Assertions.assertEquals(Arrays.<Post>asList(new Post("title", "text", "image", new Specialist("specialistName", "password", "email", "image", 0, "moreInfo"))), result);
//        //when
//        postService.getPost();
//        //then
//        verify(postRepositry).findAll();
//    }
//
//    @Test
//    void testAddNewsPost() {
//        postService.addNewsPost(new Post("title", "text", "image", new Specialist("specialistName", "password", "email", "image", 0, "moreInfo")));
//    }
//
//    @Test
//    void testDeletePost() {
//        postService.deletePost("id");
//    }
//}
//
////Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme