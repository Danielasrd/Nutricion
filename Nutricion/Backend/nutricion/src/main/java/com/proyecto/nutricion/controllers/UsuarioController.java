package com.proyecto.nutricion.controllers;

import com.proyecto.nutricion.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173") 
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/newUser")
    public ResponseEntity<Map<String, String>> crearUsuario(@RequestBody Map<String, Object> payload) {
        String email = (String) payload.get("email");
        String password = (String) payload.get("password");
        String nombre = (String) payload.get("name");
        String genero = (String) payload.get("gender");
        Integer edad = (payload.get("age") != null) ? (Integer) payload.get("age") : null;
        String date = (String) payload.get("date");

        usuarioService.guardarUsuario(email, password, nombre, genero, edad, date);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Usuario creado correctamente");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUsuario(@RequestBody Map<String, String> payload) {
        String correo = payload.get("correo");
        String contraseña = payload.get("contraseña");

        if (usuarioService.verificarCredenciales(correo, contraseña)) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Inicio de sesión exitoso");
            return ResponseEntity.ok(response);
        } else {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Credenciales inválidas");
            return ResponseEntity.status(401).body(errorResponse);
        }
    }
}