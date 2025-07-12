package com.proyecto.nutricion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.nutricion.model.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
    List<Users> findByNombre(String nombre);
}


