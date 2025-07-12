package com.proyecto.nutricion.service;

import com.proyecto.nutricion.model.OllamaRequest;
import com.proyecto.nutricion.model.OllamaResponse;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class OllamaService {

    private final RestTemplate restTemplate = new RestTemplate();
    private static final String OLLAMA_URL = "http://localhost:11434/api/generate";

    public OllamaResponse generarRespuesta(OllamaRequest request) {
        Map<String, Object> body = new HashMap<>();
        body.put("model", "llama2");
        body.put("prompt", request.getPrompt());
        body.put("stream", false);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(OLLAMA_URL, entity, Map.class);

        String respuesta = null;
        Map responseBody = response.getBody();
        if (responseBody != null) {
            respuesta = (String) responseBody.get("response");
        }
        return new OllamaResponse(respuesta);
    }
}

