package com.example.demo.web;


import com.example.demo.entities.User;
import com.example.demo.rep.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserRestService {


    @Autowired
    private UserRepo repou;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User userData){
        System.out.println((userData));
        User user =repou.findByEmail(userData.getEmail());
        if(user.getPassword().equals(userData.getPassword()))
            return ResponseEntity.ok(user);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();



    }
}
