package com.sofka.crudfullstack.repositories;

import com.sofka.crudfullstack.domains.Tarea;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface de tipo Tarea que toma los métodos existentes de CRUD repository para ser implementados en la aplicación,
 */
public interface TareaRepository extends CrudRepository <Tarea, Long> {
}
