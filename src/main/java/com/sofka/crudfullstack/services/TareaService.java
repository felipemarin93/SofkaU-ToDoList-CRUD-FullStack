package com.sofka.crudfullstack.services;


import com.sofka.crudfullstack.domains.Tarea;
import com.sofka.crudfullstack.repositories.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TareaService {

    @Autowired
    private TareaRepository tareaRepository;
    public Iterable<Tarea> list(){
        return tareaRepository.findAll();
    }

    public Tarea crearTarea(Tarea tarea){
        tarea.setCompletado(false);
        return tareaRepository.save(tarea);
    }

    public void eliminarTarea(Long id){
        tareaRepository.deleteById(id);
    }
    public Tarea get(Long id){
        return tareaRepository.findById(id).orElseThrow();
    }
    @Transactional
    public Tarea actualizarTarea(Long id, Tarea subTarea) {
        subTarea.setId(id);
        tareaRepository.save(subTarea);
        return subTarea;
    }

}
