package com.proyecto.nutricion.repository;
import com.proyecto.nutricion.model.CondicionFisica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CondicionFisicaRepository extends JpaRepository<CondicionFisica, Long> {
}