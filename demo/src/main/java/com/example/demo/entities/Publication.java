package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;


@Entity
public class Publication implements Serializable {
    @Id
    @GeneratedValue

    private Long id;



    private String nom;
    private String contact;
    private String societe;

    public Publication(String nom, String contact, String societe) {
        this.nom=nom;
        this.contact = contact;
        this.societe = societe;
    }

    public Publication(){
        super();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getSociete() {
        return societe;
    }

    public void setSociete(String societe) {
        this.societe = societe;
    }
}
