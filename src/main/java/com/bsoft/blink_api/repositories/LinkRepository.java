package com.bsoft.blink_api.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bsoft.blink_api.entities.Link;

public interface LinkRepository extends CrudRepository<Link, Long>{
    List<Link> findAllByOwnerOrderByAddedAtDesc(Long ownerID);
}
