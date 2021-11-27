package com.devsuperior.exemod1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.exemod1.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
