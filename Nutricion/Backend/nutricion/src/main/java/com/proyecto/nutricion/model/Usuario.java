package com.proyecto.nutricion.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @Column(length = 150)
    private String correo;

    @Column(name = "contraseña_hash", length = 60, nullable = false)
    private String contraseñaHash;

    @Column(length = 100, nullable = false)
    private String nombre;

    @Column(length = 45, nullable = false)
    private String genero;

    private Integer edad;

    private LocalDateTime nacimiento;

    // Getters y Setters
    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContraseñaHash() {
        return contraseñaHash;
    }

    public void setContraseñaHash(String contraseñaHash) {
        this.contraseñaHash = contraseñaHash;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public LocalDateTime getNacimiento() {
        return nacimiento;
    }

    public void setNacimiento(LocalDateTime nacimiento) {
        this.nacimiento = nacimiento;
    }
}