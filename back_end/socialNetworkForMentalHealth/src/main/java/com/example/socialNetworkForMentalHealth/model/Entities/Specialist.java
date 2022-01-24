package com.example.socialNetworkForMentalHealth.model.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Specialist {
    @Id
    private String specialistName;
    private String password;
    private String Email;
    private String image;
    private int phone ;
    private String moreInfo;


//    @OneToMany(mappedBy = "specialist" )
//    private List<Message> messages=new ArrayList<>();
    @OneToMany(mappedBy = "specialist" )
    private List<Post> post=new ArrayList<>();


    public Specialist(String specialistName, String password, String email, String image, int phone, String moreInfo) {
        this.specialistName = specialistName;
        this.password = password;
        Email = email;
        this.image = image;
        this.phone = phone;
        this.moreInfo = moreInfo;
    }

    public Specialist() {
    }

    public String getSpecialistName() {
        return specialistName;
    }

    public void setSpecialistName(String specialistName) {
        this.specialistName = specialistName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getMoreInfo() {
        return moreInfo;
    }

    public void setMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
    }
}
