package com.example.demo.web;


import com.example.demo.entities.Demo;
import com.example.demo.entities.Publication;
import com.example.demo.rep.DemoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class DemoRestService {
    @Autowired
    private DemoRepository DemoRepository;



    @RequestMapping(value="/Demos",method= RequestMethod.GET)
    /* c'est a dire si j'envoie une requete get vers /publications il me retourne la liste des publications*/
    public List<Demo> getDemos(){
        return DemoRepository.findAll();
    }

    @RequestMapping(value="/Demos/{idD}",method= RequestMethod.GET)
    public Optional<Demo> getDemo(@PathVariable long idD){
        System.out.println(("test"+idD+"our demo"+DemoRepository.findById(idD)));
        return DemoRepository.findById(idD);
    }


    @RequestMapping(value="/Demoadd",method= RequestMethod.POST)
    public Demo save(@RequestBody Demo d){
        return DemoRepository.save(d);
    }

    @RequestMapping(value="/Demodelete/{idD}",method= RequestMethod.DELETE)
    public boolean supprimer (@PathVariable Long idD){
        DemoRepository.deleteById(idD);
        return true;
    }

    @RequestMapping(value="/Demosupdate/{idD}",method= RequestMethod.PUT)
    public Demo updatesave(@PathVariable Long idD, @RequestBody Demo d){
        d.setIdD(idD);
        return DemoRepository.save(d);
    }
}
