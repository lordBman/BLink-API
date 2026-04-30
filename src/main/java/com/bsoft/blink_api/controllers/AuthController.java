package com.bsoft.blink_api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bsoft.blink_api.models.Payload;
import com.bsoft.blink_api.models.RegistrationForm;
import com.bsoft.blink_api.services.CustomUserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired CustomUserService userService;

    @PostMapping("/login")
    public String login(@RequestBody String entity) { 
        return entity;
    }

    @PostMapping("/signin")
    public Payload<?> signin(@RequestBody RegistrationForm form) {
        System.out.println(form.password());
        System.out.println(form.matchingPassword());
        if(form.password().equals(form.matchingPassword())){
            try {
                UserDetails details = userService.register(form);

                return new Payload<UserDetails>(201, details);
            } catch (Exception e) {
                System.out.println(e);
                return new Payload<String>(500, "user registration failed");
            }
        }
        return new Payload<String>(400, "password mismatch");
    }
}
