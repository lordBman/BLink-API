package com.bsoft.blink_api.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    
    @GetMapping("/")
    public String index(Model model){
        model.addAttribute("title", "BLink");

        return "home";
    }

    @GetMapping("/dashboard")
    public String dashboard(Model model){
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        model.addAttribute("title", "BLink | Dashboard");
        model.addAttribute("user", authentication.getName());

        return "dashboard";
    }

    @GetMapping("/signin")
    public String register(Model model){
        return "register";
    }
}