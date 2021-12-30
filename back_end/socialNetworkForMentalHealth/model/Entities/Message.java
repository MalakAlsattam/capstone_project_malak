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

    @ManyToOne
    @JoinColumn(referencedColumnName = "specialistName")
    private Specialist specialist;

    public Message(int id, String message, User user ) {
        this.id = id;
        this.message = message;
        this.user = user;

    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Specialist getSpecialist() {
        return specialist;
    }

    public void setSpecialist(Specialist specialist) {
        this.specialist = specialist;
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
