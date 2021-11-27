package com.devsuperior.bds02.service;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.bds02.dto.EventDTO;
import com.devsuperior.bds02.entities.City;
import com.devsuperior.bds02.entities.Event;
import com.devsuperior.bds02.excptions.ResourceNotFoundException;
import com.devsuperior.bds02.repository.EventRespository;

@Service
public class EventService {

	@Autowired
	private EventRespository repository;
	

	public EventDTO update(Long id, EventDTO dto) {
		try {
			Event enity = repository.getOne(id);
			enity.setName(dto.getName());
			enity.setDate(dto.getDate());
			enity.setUrl(dto.getUrl());
			enity.setCity(new City(dto.getCityId(),null));
			enity = repository.save(enity);
			return new EventDTO(enity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não existente " + id);
		}

	}
	
	
}
