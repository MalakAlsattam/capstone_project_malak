package com.example.socialNetworkForMentalHealth.model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class PersonalExperience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String text ;
    private String image;
    @ManyToOne
    @JoinColumn(referencedColumnName = "userName")
    private User user;

    @OneToMany(mappedBy = "personalExperience" )
    @JsonIgnore
    private List<Comments> comments=new ArrayList<>();
    public PersonalExperience() {
    }

    public PersonalExperience( String text, String image, User user, List<Comments> comments) {

        this.text = text;
        this.image = image;
        this.user = user;
        this.comments = comments;
    }
    public List<Comments> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
