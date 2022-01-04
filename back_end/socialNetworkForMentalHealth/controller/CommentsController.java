package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.Comments;
import com.example.socialNetworkForMentalHealth.model.Entities.Message;
import com.example.socialNetworkForMentalHealth.model.services.CommentsService;
import com.example.socialNetworkForMentalHealth.model.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CommentsController {
    private CommentsService commentsService;
    @Autowired
    public CommentsController(CommentsService commentsService) {
        this.commentsService = commentsService;
    }




    @GetMapping("api/comment")

    public List<Comments> getComment() {


        return commentsService.getComment();
    }

    @GetMapping("api/comment/{personalExperienceId}")

    public List<Comments> checkComments(@PathVariable ("personalExperienceId") Integer personalExperienceId) {


        return commentsService.checkComments(personalExperienceId);
    }


    @PostMapping("api/comment/add")

    public void registerNewComment(@RequestBody Comments comments) {
        commentsService.addNewComments(comments);
    }

    @DeleteMapping(path = "delete/comments/{id}")
    public void deleteComment(@PathVariable ("id") Integer id){
        commentsService.deleteComments(id);
    }



}
