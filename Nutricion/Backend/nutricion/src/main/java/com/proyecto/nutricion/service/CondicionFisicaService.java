package com.proyecto.nutricion.service;

import com.proyecto.nutricion.model.CondicionFisica;
import com.proyecto.nutricion.repository.CondicionFisicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CondicionFisicaService {

    @Autowired
    private CondicionFisicaRepository repository;

    public CondicionFisica saveCondicion(CondicionFisica condicion) {
        return repository.save(condicion);
    }
}