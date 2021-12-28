package com.example.socialNetworkForMentalHealth.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Post {
    @Id
    private String title ;
    private String text ;
    private String image;
    @ManyToOne
    @JoinColumn(referencedColumnName = "specialistName")
    private Specialist specialist;

    public Post() {
    }

    public Post(String title, String text, String image, Specialist specialist) {
        this.title = title;
        this.text = text;
        this.image = image;
        this.specialist = specialist;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public Specialist getSpecialist() {
        return specialist;
    }

    public void setSpecialist(Specialist specialist) {
        this.specialist = specialist;
    }
}

