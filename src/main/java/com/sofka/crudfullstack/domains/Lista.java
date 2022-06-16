package com.sofka.crudfullstack.domains;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
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
