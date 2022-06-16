package com.sofka.crudfullstack.services;

import com.sofka.crudfullstack.domains.Lista;
import com.sofka.crudfullstack.repositories.ListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Clase Service que recibe los llamados del controlador para invocar al repository implementado para los métodos CRUD
 *
 */

@Service
public class ListaService {

    @Autowired
    private ListaRepository listaRepository;

    public Iterable<Lista> list(){
        return listaRepository.findAll();
    }

    /**
     * Método para crear una lista dentro de la Bd recibe los
     * @param lista tipo Lista
     * @return la información guardada
     */
    public Lista crearLista(Lista lista){
        return listaRepository.save(lista);
    }

    /**
     * Método para borrar  que recibe el ID y se lo envía al repository, no retorna ningún valor o acción
     * @param id
     */
    public void borrarLista(Long id){
        listaRepository.delete(get(id));
    }

    /**
     * Metodo para obtener los id de las listas
     * @param id
     * @return
     */
    public Lista get(Long id){
        return listaRepository.findById(id).orElseThrow();
    }
}
