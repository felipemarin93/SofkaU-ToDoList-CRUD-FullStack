package com.sofka.crudfullstack.services;


import com.sofka.crudfullstack.domains.Tarea;
import com.sofka.crudfullstack.repositories.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


/**
 * Clase Service que recibe los llamados del controlador para invocar al repository implementado para los métodos CRUD
 *
 */
@Service
public class TareaService {

    @Autowired
    private TareaRepository tareaRepository;
    public Iterable<Tarea> list(){
        return tareaRepository.findAll();
    }


    /**
     * Método para crear una tarea dentro de la Bd recibe los
     * @param
     * @return la información guardada
     */
    public Tarea crearTarea(Tarea tarea){
        tarea.setCompletado(false);
        return tareaRepository.save(tarea);
    }

    /**
     * Método para eliminar una tarea que recibe el ID y se lo envía al repository.
     * @param id recibe el Id de la tarea para eliminar en la BD
     * Este método no retorna nada
     */
    public void eliminarTarea(Long id){
        tareaRepository.deleteById(id);
    }

    /**
     * Método para actualizar tarea
     * @param id recibe los parámetros de id y recibe el objeto a actualizar en la BD
     * @param subTarea
     * @return
     */
    @Transactional
    public Tarea actualizarTarea(Long id, Tarea subTarea) {
        subTarea.setId(id);
        tareaRepository.save(subTarea);
        return subTarea;
    }

}
