package com.example.socialNetworkForMentalHealth.controller;

import com.example.socialNetworkForMentalHealth.model.Entities.Message;
import com.example.socialNetworkForMentalHealth.model.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin (origins = "https://localhost:3002")

@RestController
public class MessageController {
private MessageService messageService;
    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }




    @GetMapping("api/message")

    public List<Message> getMessage() {


        return messageService.getMessage();
    }

    @PostMapping("api/message/add")

    public void registerNewMessage(@RequestBody Message message) {
        messageService.addNewMessage(message);
    }

    @DeleteMapping(path = "delete/{id}")
    public void deleteMessage(@PathVariable ("id") Integer id){
        messageService.deleteMessage(id);
    }



}

