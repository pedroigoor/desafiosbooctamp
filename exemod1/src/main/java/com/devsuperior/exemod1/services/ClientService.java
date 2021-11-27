package com.devsuperior.exemod1.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.exemod1.dtos.ClientDto;
import com.devsuperior.exemod1.entities.Client;
import com.devsuperior.exemod1.excptions.ResourceNotFoundException;
import com.devsuperior.exemod1.repository.ClientRepository;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;

	@Transactional(readOnly = true)
	public Page<ClientDto> findAll(PageRequest pageRequest) {
		Page<Client> list = repository.findAll(pageRequest);
		return list.map(ClientDto::new);

	}

	@Transactional(readOnly = true)
	public ClientDto findById(Long id) {
		Optional<Client> obj = repository.findById(id);
		Client entity = obj.orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado"));
		return new ClientDto(entity);
	}

	@Transactional
	public ClientDto save(ClientDto dto) {
		Client entity = new Client();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ClientDto(entity);

	}

	@Transactional
	public ClientDto update(Long id, ClientDto dto) {
		try {
			Client entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ClientDto(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não existente " + id);

		}

	}
	
	@Transactional
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não existente " + id);
		}

	}

	private void copyDtoToEntity(ClientDto dto, Client entity) {
		entity.setName(dto.getName());
		entity.setBirthDate(dto.getBirthDate());
		entity.setChildren(dto.getChildren());
		entity.setCpf(dto.getCpf());
		entity.setIncome(dto.getIncome());

	}

}
