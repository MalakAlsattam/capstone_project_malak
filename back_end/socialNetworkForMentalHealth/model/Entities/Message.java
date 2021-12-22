package com.example.socialNetworkForMentalHealth.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Message {
    @Id
    private int id;
    private String message;
@ManyToOne
@JoinColumn(referencedColumnName = "userName")
private User user;

    public Message(int id, String message, User user) {
        this.id = id;
        this.message = message;
        this.user = user;
    }

    public Message() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
