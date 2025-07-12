package com.proyecto.nutricion.model;
// import javax.persistence.*;
import jakarta.persistence.*;

@Entity
@Table(name = "condicion_fisica")
public class CondicionFisica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long condicion_id;

    @Column(nullable = false, length = 45)
    private String usuario_id;

    private Integer peso;
    private Integer altura;
    private Integer IMC;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NivelActividad nivel_actividad;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Objetivo objetivo;

    // @ElementCollection
    // // @CollectionTable(name = "condicion_medica_set", joinColumns = @JoinColumn(name = "condicion_id"))
    // @Column(name = "condicion_medica")
    private String condicion_medica;
    // Getters y setters
    public enum NivelActividad {
        Sedentario, lig_activo, mode_activo, muy_activo, extra_activo
    }

    public enum Objetivo {
        perder_grasa, mantener_masa_muscular, ganar_masa_muscular
    }

    // Getters y setters
    public Long getCondicion_id() { return condicion_id; }
    public void setCondicion_id(Long condicion_id) { this.condicion_id = condicion_id; }

    public String getUsuario_id() { return usuario_id; }
    public void setUsuario_id(String usuario_id) { this.usuario_id = usuario_id; }

    public Integer getPeso() { return peso; }
    public void setPeso(Integer peso) { this.peso = peso; }

    public Integer getAltura() { return altura; }
    public void setAltura(Integer altura) { this.altura = altura; }

    public Integer getIMC() { return IMC; }
    public void setIMC(Integer IMC) { this.IMC = IMC; }

    public NivelActividad getNivel_actividad() { return nivel_actividad; }
    public void setNivel_actividad(NivelActividad nivel_actividad) { this.nivel_actividad = nivel_actividad; }

    public Objetivo getObjetivo() { return objetivo; }
    public void setObjetivo(Objetivo objetivo) { this.objetivo = objetivo; }

    public String getCondicion_medica() { return condicion_medica; }
    public void setCondicion_medica(String condicion_medica) { this.condicion_medica = condicion_medica; }
}