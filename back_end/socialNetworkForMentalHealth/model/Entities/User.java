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
    private String roll;
@OneToMany(mappedBy = "user" )
@JsonIgnore
private List<Message> messages=new ArrayList<>();
    @OneToMany(mappedBy = "user" )
    @JsonIgnore
    private List<PersonalExperience> personalExperience=new ArrayList<>();

    @OneToMany(mappedBy = "user" )
    @JsonIgnore
    private List<Comments> comments=new ArrayList<>();

    public User(String userName, String passWord, String roll, List<Message> messages, List<PersonalExperience> personalExperience, List<Comments> comments) {
        this.userName = userName;
        this.passWord = passWord;
        this.roll = roll;
        this.messages = messages;
        this.personalExperience = personalExperience;
        this.comments = comments;
    }

    public User() {
    }

    public List<Comments> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    public List<PersonalExperience> getPersonalExperience() {
        return personalExperience;
    }

    public void setPersonalExperience(List<PersonalExperience> personalExperience) {
        this.personalExperience = personalExperience;
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

