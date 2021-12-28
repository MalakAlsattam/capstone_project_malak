package com.example.socialNetworkForMentalHealth.model.services;

import com.example.socialNetworkForMentalHealth.model.Entities.Post;
import com.example.socialNetworkForMentalHealth.model.Repositry.PostRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private PostRepositry postRepositry;
    @Autowired

    public PostService(PostRepositry postRepositry) {
        this.postRepositry = postRepositry;
    }
    public List<Post> getPost() {
        return postRepositry.findAll();

    }
    public void addNewsPost(Post post){

        postRepositry.save(post);
    }


    public void deletePost(String id) {
        postRepositry.deleteById(id);}
}



