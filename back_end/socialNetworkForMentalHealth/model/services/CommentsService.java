package com.example.socialNetworkForMentalHealth.model.services;

import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
import com.example.socialNetworkForMentalHealth.model.Repositry.CommentsRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommentsService {
    private CommentsRepositry commentsRepositry;
    @Autowired
    public CommentsService(CommentsRepositry commentsRepositry) {
        this.commentsRepositry = commentsRepositry;
    }

    public List<Comments> getComment() {
        return commentsRepositry.findAll();

    }
    public List<Comments> checkComments(Integer personalExperienceId){
       // List<Comments> comments = new ArrayList<>();
            return commentsRepositry.findComments(personalExperienceId);
        //return comments;
    }





            public void addNewComments(Comments comments){

        commentsRepositry.save(comments);
    }


    public void deleteComments(Integer id) {
        commentsRepositry.deleteById(id);}
}





