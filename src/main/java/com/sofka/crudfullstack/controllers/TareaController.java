package com.sofka.crudfullstack.controllers;
import com.sofka.crudfullstack.domains.Tarea;
import com.sofka.crudfullstack.services.TareaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Clase Controlador para las tareas en la cual se especifican las rutas o endpoints de nuestra base de datos
 * Se usan las anotaciones de spring boot @RestController (Especificación para el controlador)y @CrossOrigin para el indexado de las tablas ,
 * @Autowired nos ayuda en la inyección de dependencias. Tambien están definidos los métodos CRUD (POST, GET, DELETE) que recibe desde el front
 * de la aplciación para consumir dicha API, estos métodos a su vez reciben parámetros y llaman la capa de Servicio.
 * version: 1.0
 * @Author Daniel Felipe Marin
 */


@Slf4j
@CrossOrigin
@RestController
public class TareaController {

    @Autowired
    private TareaService tareaService;

    /**
     * Método tipo GET usado para consultar la lista de las tareas en la Base de datos
     * @return retorna el total de las tareas que existen en la BD
     */
    @GetMapping(path = "/tareas")
    public Iterable<Tarea> list(){
        return tareaService.list();
    }

    /**
     * Método generado para crear una tarea en la base de datos que recibe la ruta o endpoint y un JSON con la información a agregar
     * @param tarea
     * @return la inserción realizada en cada uno de los campos
     */
    @PostMapping(path = "/creartarea")
    public Tarea crearTarea(@RequestBody Tarea tarea){
        return tareaService.crearTarea(tarea);
    }

    /**
     * Método estipulado para actualizar algún registro que tiene la tabla tarea en la BD, recibe un parametro en la URL que es el id,
     * y recibe la información a actualizar en formato tipo JSON para realizar la inserción en la BD
     * @param tarea
     * @param id
     * @return
     */
    @PutMapping(path = "/actualizartarea/{id}")
    public Tarea actualizarTarea(@RequestBody Tarea tarea, @PathVariable(value="id") Long id ) {
        tareaService.actualizarTarea(id, tarea);
        return null;
    }

    /**
     * Método de tipo Delete que nos permite eliminar en la base de datos una Tarea recibiendo el
     * @param id
     */
    @DeleteMapping(path = "/eliminartarea/{id}")
    public void eliminarTarea(@PathVariable("id")Long id){
        tareaService.eliminarTarea(id);
    }

}
