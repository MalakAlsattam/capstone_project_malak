package com.example.socialNetworkForMentalHealth.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class PersonalExperience {
    @Id
    private int id ;
    private String text ;
    private String image;
    @ManyToOne
    @JoinColumn(referencedColumnName = "userName")
    private User user;
    public PersonalExperience() {
    }

    public PersonalExperience(int id, String text, String image) {
        this.id = id;
        this.text = text;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
