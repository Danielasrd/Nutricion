package com.proyecto.nutricion.controllers;
import com.proyecto.nutricion.model.OllamaRequest;
import com.proyecto.nutricion.model.OllamaResponse;
import com.proyecto.nutricion.service.OllamaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ollama")
public class OllamaController {

    private final OllamaService ollamaService;

    public OllamaController(OllamaService ollamaService) {
        this.ollamaService = ollamaService;
    }

    @PostMapping("/generar")
    public OllamaResponse generar(@RequestBody OllamaRequest request) {
        return ollamaService.generarRespuesta(request);
    }
}
