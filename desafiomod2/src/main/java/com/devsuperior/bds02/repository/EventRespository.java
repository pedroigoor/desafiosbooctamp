package com.devsuperior.bds02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.bds02.entities.Event;

@Repository
public interface EventRespository extends JpaRepository<Event, Long> {


}
