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
    private String password;
    private boolean active;
    private String roles;
@OneToMany(mappedBy = "user" )
@JsonIgnore
private List<Message> messages=new ArrayList<>();
    @OneToMany(mappedBy = "user" )
    @JsonIgnore
    private List<PersonalExperience> personalExperience=new ArrayList<>();

    @OneToMany(mappedBy = "user" )
    @JsonIgnore
    private List<Comments> comments=new ArrayList<>();

    public User(String userName, String password, boolean active, String roles, List<Message> messages, List<PersonalExperience> personalExperience, List<Comments> comments) {
        this.userName = userName;
        this.password = password;
        this.active = active;
        this.roles = roles;
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }
}

