package com.sofka.crudfullstack.controllers;


import com.sofka.crudfullstack.domains.Tarea;
import com.sofka.crudfullstack.services.TareaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
public class TareaController {

    @Autowired
    private TareaService tareaService;

    @GetMapping(path = "/tareas")
    public Iterable<Tarea> list(){
        return tareaService.list();
    }

    @PostMapping(path = "/creartarea")
    public Tarea crearTarea(@RequestBody Tarea tarea){
        return tareaService.crearTarea(tarea);
    }

    @PutMapping(path = "/actualizartarea/{id}")
    public Tarea actualizarTarea(@RequestBody Tarea tarea, @PathVariable(value="id") Long id ) {
        tareaService.actualizarTarea(id, tarea);
        return null;
    }

    @DeleteMapping(path = "/eliminartarea/{id}")
    public void eliminarTarea(@PathVariable("id")Long id){
        tareaService.eliminarTarea(id);
    }


}
