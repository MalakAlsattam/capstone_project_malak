package com.example.socialNetworkForMentalHealth.model.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class User {

    @Id
    @Column(updatable = false)
    private String userName;
    @Column(updatable = false)
    private String passWord;


    public User( String userName, String passWord) {

        this.userName = userName;
        this.passWord = passWord;

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


}
