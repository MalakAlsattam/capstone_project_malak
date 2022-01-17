package com.example.socialNetworkForMentalHealth.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Comments  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String comment;
    @ManyToOne
    @JoinColumn(referencedColumnName = "userName")
    private User user;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private PersonalExperience personalExperience;

    public Comments( String comment, User user, PersonalExperience personalExperience) {

        this.comment = comment;
        this.user = user;
        this.personalExperience = personalExperience;
    }

    public Comments(String comment) {
        this.comment = comment;
    }

    public Comments() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }


    public void setPersonalExperience(PersonalExperience personalExperience) {
        this.personalExperience = personalExperience;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public PersonalExperience getPersonalExperience() {
        return personalExperience;
    }
}
