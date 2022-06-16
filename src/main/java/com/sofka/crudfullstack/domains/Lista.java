package com.sofka.crudfullstack.domains;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


/**
 * Clase Modelo en la cual se crea la entidad para la tabla "Lista" que va a almacenarse en la base de datos
 * Se crean los atributos id,nombre
 * Se usan las anotaciones de spring boot @Data para Lombok, @Entity como persistencia para la BD y las anotaciones
 * @table, @column @oneToMany que son anotaciones propias de JPA para especificar el modelo en la BD
 * No fue necesario generar el constructor ni los getters y setter debido a el uso de Lombok.
 * version: 1.0
 * @Author Daniel Felipe Marin
 */



@RequiredArgsConstructor
@Data
@Entity
@Table(name="Lista")
public class Lista {
    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_tarea", nullable = false)
        private Long id;

        @Column(name = "nombre", nullable = false)
        private String nombre;

        @OneToMany(fetch = FetchType.EAGER,
                targetEntity = Tarea.class,
                cascade = CascadeType.REMOVE,
                mappedBy = "lista")

        @JsonManagedReference
        private List<Tarea> tarea = new ArrayList<>();


}
