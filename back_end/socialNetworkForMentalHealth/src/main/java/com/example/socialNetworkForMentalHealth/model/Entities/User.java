package com.example.socialNetworkForMentalHealth.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class User {

    @Id
    @Column(updatable = false)
    private String userName;
    @Column(updatable = false)
    private String passWord;

@OneToMany(mappedBy = "user" )
@JsonIgnore
private List<Message> messages=new ArrayList<>();

    public User(String userName, String passWord, List<Message> messages) {
        this.userName = userName;
        this.passWord = passWord;
        this.messages = messages;
    }

    public User() {
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }
}

