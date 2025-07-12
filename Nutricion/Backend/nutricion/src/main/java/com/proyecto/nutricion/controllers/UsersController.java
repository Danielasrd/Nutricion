package com.proyecto.nutricion.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.proyecto.nutricion.model.Users;
import com.proyecto.nutricion.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private final UserRepository repository;

    public UsersController(UserRepository repository) {
        this.repository = repository;
    }

    // Obtener todos los usuarios
    @GetMapping
    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    // Crear un nuevo usuario
    @PostMapping
    public Users createUser(@RequestBody Users users) {
        return repository.save(users);
    }

    // Buscar usuario por ID
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // Buscar usuarios por nombre
    @GetMapping("/buscar")
    public List<Users> getUsersByNombre(@RequestParam String nombre) {
        return repository.findByNombre(nombre);
    }

    // Eliminar usuario por ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        repository.deleteById(id);
    }
}


