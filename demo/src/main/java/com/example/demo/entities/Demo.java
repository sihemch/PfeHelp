package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;


@Entity
public class Demo implements Serializable {
    @Id
    @GeneratedValue

    private Long idD;

    private String nomEt;
    private String url;
    private String description;

    public Demo() {
        super();
    }

    public Demo(String nomEt, String url, String description) {
        this.nomEt = nomEt;
        this.url = url;
        this.description = description;
    }

    public Long getIdD() {
        return idD;
    }

    public void setIdD(Long idD) {
        this.idD = idD;
    }

    public String getNomEt() {
        return nomEt;
    }

    public void setNomEt(String nomEt) {
        this.nomEt = nomEt;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
