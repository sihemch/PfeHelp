package com.example.demo.rep;

import com.example.demo.entities.Demo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DemoRepository extends JpaRepository<Demo, Long> {
}
