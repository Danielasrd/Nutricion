package com.proyecto.nutricion.service;

import com.proyecto.nutricion.model.Usuario;
import com.proyecto.nutricion.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario guardarUsuario(String email, String passwordHash, String nombre, String genero, Integer edad, String nacimientoStr) {
        Usuario usuario = new Usuario();
        usuario.setCorreo(email);
        usuario.setContraseñaHash(passwordHash);
        usuario.setNombre(nombre);
        usuario.setGenero(genero);
        usuario.setEdad(edad);

        if (nacimientoStr != null && !nacimientoStr.isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDateTime nacimiento = LocalDateTime.parse(nacimientoStr + "T00:00:00", formatter);
            usuario.setNacimiento(nacimiento);
        }

        return usuarioRepository.save(usuario);
    }

    public boolean verificarCredenciales(String correo, String contraseña) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findByCorreo(correo);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            // Aquí deberías usar un algoritmo de hash para comparar contraseñas
            // Por simplicidad, comparamos directamente. ¡NO HACER ESTO EN PRODUCCIÓN!
            return usuario.getContraseñaHash().equals(contraseña);
        }
        return false;
    }
}