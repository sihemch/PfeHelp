package com.example.demo.rep;

import com.example.demo.entities.Publication;
import com.example.demo.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PublicationRepository extends JpaRepository <Publication, Long> {
@Query("select p from Publication p where p.nom like :x")
    public Page<Publication> chercher (@Param("x")String mc, Pageable pageable);

}
