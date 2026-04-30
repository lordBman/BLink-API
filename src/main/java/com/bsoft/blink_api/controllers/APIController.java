package com.bsoft.blink_api.controllers;

import org.apache.logging.log4j.message.FormattedMessage;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bsoft.blink_api.models.Welcome;

@RestController
@RequestMapping("/api")
public class APIController {
    @GetMapping("")
    public Welcome index(@AuthenticationPrincipal String username){
        FormattedMessage format = new FormattedMessage("Hi, {}, Welcome to BLink API", username);
        
        return new Welcome(format.getFormattedMessage(), 200);
    }
}
