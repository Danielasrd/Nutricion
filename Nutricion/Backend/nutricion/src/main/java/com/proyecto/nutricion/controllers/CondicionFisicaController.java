package com.proyecto.nutricion.controllers;

import com.proyecto.nutricion.model.CondicionFisica;
import com.proyecto.nutricion.service.CondicionFisicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/condicion")
public class CondicionFisicaController {

    @Autowired
    private CondicionFisicaService service;

    @PostMapping("/guardar")
    public ResponseEntity<String> guardarCondicion(@RequestBody CondicionDTO dto) {
        try {
            CondicionFisica condicion = new CondicionFisica();
          
            condicion.setUsuario_id(dto.getUsuario_id());
            condicion.setPeso(dto.getPeso());
            condicion.setAltura(dto.getAltura());
            condicion.setIMC(dto.getIMC());
            condicion.setNivel_actividad(CondicionFisica.NivelActividad.valueOf(dto.getNivel_actividad()));
            condicion.setObjetivo(CondicionFisica.Objetivo.valueOf(dto.getObjetivo()));
            condicion.setCondicion_medica(dto.getCondicion_medica());

            service.saveCondicion(condicion);
            return new ResponseEntity<>("Datos guardados correctamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al guardar datos: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // DTO para recibir los datos
    public static class CondicionDTO {
        private String usuario_id;
        private Integer peso;
        private Integer altura;
        private Integer IMC;
        private String nivel_actividad;
        private String objetivo;
        private String condicion_medica;

        // Getters y setters
        public String getUsuario_id() { return usuario_id; }
        public void setUsuario_id(String usuario_id) { this.usuario_id = usuario_id; }

        public Integer getPeso() { return peso; }
        public void setPeso(Integer peso) { this.peso = peso; }

        public Integer getAltura() { return altura; }
        public void setAltura(Integer altura) { this.altura = altura; }

        public Integer getIMC() { return IMC; }
        public void setIMC(Integer IMC) { this.IMC = IMC; }

        public String getNivel_actividad() { return nivel_actividad; }
        public void setNivel_actividad(String nivel_actividad) { this.nivel_actividad = nivel_actividad; }

        public String getObjetivo() { return objetivo; }
        public void setObjetivo(String objetivo) { this.objetivo = objetivo; }

        public String getCondicion_medica() { return condicion_medica; }
        public void setCondicion_medica(String condicion_medica) { this.condicion_medica = condicion_medica; }
    }
}