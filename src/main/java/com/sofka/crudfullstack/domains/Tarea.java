package com.sofka.crudfullstack.domains;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

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
