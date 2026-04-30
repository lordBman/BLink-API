package com.bsoft.blink_api.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table(name = "LINKS")
public class Link {
    private @Id Long id;
    private String name;

    @Column("owner_id")
    private AggregateReference<User, Long> owner;

    private boolean isPrivate;
    private LocalDateTime addedAt;
    private String originalUrl, url;

    public Link(Long id, String name, String originalUrl, String url){
        this.id = id;
        this.name = name;
        this.isPrivate = false;
        this.addedAt = LocalDateTime.now();
        this.originalUrl = originalUrl;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public AggregateReference<User, Long> getOwner(){
        return this.owner;
    }

    public LocalDateTime getAddedAt() {
        return addedAt;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public String getUrl() {
        return url;
    }

    public boolean isPrivate() {
        return isPrivate;
    }
}
