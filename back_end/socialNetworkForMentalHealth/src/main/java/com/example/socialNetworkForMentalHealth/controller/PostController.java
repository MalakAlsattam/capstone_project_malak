package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.Post;
import com.example.socialNetworkForMentalHealth.model.Entities.Specialist;
import com.example.socialNetworkForMentalHealth.model.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    private PostService postServices;
    @Autowired

    public PostController(PostService  postServices) {
        this.postServices = postServices;
    }
    @GetMapping("api/post")

    public List<Post> getPost() {


        return postServices.getPost();
    }



    @PostMapping("api/post/add")

    public void registerNewsPost(@RequestBody Post post) {
        postServices.addNewsPost(post);
    }

    @DeleteMapping(path = "api/post/delete/{title}")
    public void deleteSpecialist(@PathVariable ("title") String title){
        postServices.deletePost(title);
    }



}


