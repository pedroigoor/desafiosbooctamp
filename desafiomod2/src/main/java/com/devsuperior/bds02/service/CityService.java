package com.devsuperior.bds02.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.devsuperior.bds02.dto.CityDTO;
import com.devsuperior.bds02.entities.City;
import com.devsuperior.bds02.excptions.DataBaseException;
import com.devsuperior.bds02.excptions.ResourceNotFoundException;
import com.devsuperior.bds02.repository.CityRespository;

@Service
public class CityService {

	@Autowired
	private CityRespository repository;

	public List<CityDTO> findAll() {
		List<City> list = repository.findAll(Sort.by("name"));

		return list.stream().map(CityDTO::new).collect(Collectors.toList());
	}

	public CityDTO save(CityDTO dto) {
		return new CityDTO(repository.save(new City(null, dto.getName())));

	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não existente " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violantion");
		}
		
	}
	
	
}
