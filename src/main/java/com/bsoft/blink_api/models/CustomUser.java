package com.bsoft.blink_api.models;

import java.util.Arrays;
import java.util.Collection;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.bsoft.blink_api.entities.User;

public class CustomUser implements UserDetails{
    private User user;

    public CustomUser(User user){
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        /*switch(this.user.getRole()){
            case "admin":
                return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
            default:
                return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
        }*/
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public @Nullable String getPassword() {
        return this.user.getPassword();
    }

    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
    User getUser(){
        return this.user;
    }
}
