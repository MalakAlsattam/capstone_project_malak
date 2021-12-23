package com.example.socialNetworkForMentalHealth.model.services;
import com.example.socialNetworkForMentalHealth.model.Entities.Message;
import com.example.socialNetworkForMentalHealth.model.Repositry.MessageRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    private MessageRepositry messageRepositry;
    @Autowired
    public MessageService(MessageRepositry messageRepositry) {
        this.messageRepositry = messageRepositry;
    }

    public List<Message> getMessage() {
        return messageRepositry.findAll();

    }
    public void addNewMessage(Message message){

            messageRepositry.save(message);
    }


    public void deleteMessage(Integer id) {
        messageRepositry.deleteById(id);}
}

