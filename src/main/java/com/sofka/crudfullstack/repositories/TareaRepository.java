package com.sofka.crudfullstack.repositories;

import com.sofka.crudfullstack.domains.Tarea;
import org.springframework.data.repository.CrudRepository;


public interface TareaRepository extends CrudRepository <Tarea, Long> {
}
