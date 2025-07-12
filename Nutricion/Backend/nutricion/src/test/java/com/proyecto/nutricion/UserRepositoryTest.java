package com.proyecto.nutricion;

import com.proyecto.nutricion.model.Users;
import com.proyecto.nutricion.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository repository;

    @Test
    public void testBuscarPorNombre() {
        Users user = new Users("Serena", "serena@example.com");
        repository.save(user);

        List<Users> resultado = repository.findByNombre("Serena");

        assertFalse(resultado.isEmpty());
        assertEquals("Serena", resultado.get(0).getNombre());
    }
}
