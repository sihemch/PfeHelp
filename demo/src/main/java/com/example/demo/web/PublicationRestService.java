package com.example.demo.web;

import com.example.demo.entities.Publication;
import com.example.demo.rep.PublicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class PublicationRestService {
    @Autowired
    private PublicationRepository publicationRepository;



    @RequestMapping(value="/publications",method= RequestMethod.GET)
    /* c'est a dire si j'envoie une requete get vers /publications il me retourne la liste des publications*/
    public List<Publication> getPublications(){
        return publicationRepository.findAll();
    }

    @RequestMapping(value="/publications/{id}",method= RequestMethod.GET)
    public Optional<Publication> getpublication(@PathVariable long id){
        System.out.println(("test"+id+"our pub"+publicationRepository.findById(id)));
        return publicationRepository.findById(id);
    }


    @RequestMapping(value="/publicationadd",method= RequestMethod.POST)
    public Publication save(@RequestBody Publication p){
        return publicationRepository.save(p);
    }

    @RequestMapping(value="/publicationsdelete/{id}",method= RequestMethod.DELETE)
    public boolean supprimer (@PathVariable Long id){
        publicationRepository.deleteById(id);
        return true;
    }

    @RequestMapping(value="/publicationsupdate/{id}",method= RequestMethod.PUT)
    public Publication updatesave(@PathVariable Long id, @RequestBody Publication p){
        p.setId(id);
        return publicationRepository.save(p);
    }

   /*  @RequestMapping(value="/chercherPublications",method= RequestMethod.GET)
    public Page<Publication> chercher{
        @RequestParam(name="mc", defaultValue = "") String mc,
        @RequestParam(name="page", defaultValue = "0") int page,
        @RequestParam(name="size", defaultValue = "5") int size
        return publicationRepository.chercher("%"+mc+"%", new PageRequest(page , size));
    } */
}
