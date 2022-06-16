package com.sofka.crudfullstack.domains;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import javax.persistence.*;

/**
 * Clase Modelo en la cual se crea la entidad para la tabla "Tarea" que va a almacenarse en la base de datos
 * Se crean los atributos id,nombre, completado y lista que es la llave foranea de la tabla Lista
 * Se usan las anotaciones de spring boot @Data para Lombok, @Entity como persistencia para la BD y las anotaciones
 * @table, @column @ManyToOne que son anotaciones propias de JPA para especificar el modelo en la BD
 *
 * version: 1.0
 * @Author Daniel Felipe Marin
 */

@Data
@Entity
@Table(name = "tarea")
public class Tarea {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tarea", nullable = false)
    private Long id;

    @Column(name = "nombre", nullable = false, length = 45)
    private String nombre;

    @Column(name = "completado")
    private boolean completado;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Lista_id_lista", nullable = false)
    @JsonBackReference
    private Lista lista;
}
