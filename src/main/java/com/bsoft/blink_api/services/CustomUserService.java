package com.bsoft.blink_api.services;

import java.util.Optional;

import org.apache.logging.log4j.message.FormattedMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bsoft.blink_api.entities.User;
import com.bsoft.blink_api.models.CustomUser;
import com.bsoft.blink_api.models.RegistrationForm;
import com.bsoft.blink_api.repositories.UserRepository;

@Service
public class CustomUserService implements UserDetailsService{
    @Autowired UserRepository repository;
    PasswordEncoder passwordEncoder;

    public CustomUserService(PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = this.repository.findByUsername(username);
        if(user.isEmpty()){
            throw new UsernameNotFoundException(new FormattedMessage("unable to find user({})", username).getFormattedMessage());
        }
        System.out.println(user.get().getUsername());
        return new CustomUser(user.get());
    }

    public UserDetails register(RegistrationForm form){
        String encodedPassword = this.passwordEncoder.encode(form.password());
        User user = repository.save(new User(null, form.fname(), form.lname(), form.username(), form.email(), encodedPassword, null));
        CustomUser customUser = new CustomUser(user);

        return customUser;
    }
}