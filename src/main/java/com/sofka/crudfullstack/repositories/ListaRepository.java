package com.sofka.crudfullstack.repositories;

import com.sofka.crudfullstack.domains.Lista;
import org.springframework.data.repository.CrudRepository;


/**
 * Interface de tipo Lista que toma los métodos existentes de CRUD repository para ser implementados en la aplicación,
 */
public interface ListaRepository  extends CrudRepository<Lista, Long> {

}
