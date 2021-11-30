package com.devsuperior.bds04.service;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.bds04.dto.EventDTO;
import com.devsuperior.bds04.entities.City;
import com.devsuperior.bds04.entities.Event;
import com.devsuperior.bds04.excptions.ResourceNotFoundException;
import com.devsuperior.bds04.repositories.EventRespository;

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
			enity.setCity(new City(dto.getCityId(), null));
			enity = repository.save(enity);
			return new EventDTO(enity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não existente " + id);
		}

	}

	@Transactional(readOnly = true)
	public Page<EventDTO> findAllPaged(Pageable pageable) {
		Page<Event> list = repository.findAll(pageable);
		return list.map(x -> new EventDTO(x));
	}

	@Transactional
	public EventDTO save(EventDTO dto) {
		Event entity = new Event();
		entity.setCity(new City(dto.getCityId(), null));
		entity.setDate(dto.getDate());
		entity.setName(dto.getName());
		entity.setUrl(dto.getUrl());
		entity = repository.save(entity);
		return new EventDTO(entity);
	}

}
