package com.sofka.crudfullstack.controllers;
import com.sofka.crudfullstack.domains.Lista;
import com.sofka.crudfullstack.services.ListaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * Clase Controlador para las listas en la cual se especifican las rutas o endpoints de nuestra base de datos
 * Se usan las anotaciones de spring boot @RestController (Especificación para el controlador)y @CrossOrigin para el indexado de las tablas ,
 * @Autowired nos ayuda en la inyección de dependencias. Tambien están definidos los métodos CRUD (POST, GET, DELETE) que recibe desde el front
 * de la aplciación para consumir dicha API, estos métodos a su vez reciben parámetros y llaman la capa de Servicio.
 * version: 1.0
 * @Author Daniel Felipe Marin
 */




@Slf4j
@CrossOrigin
@RestController
public class ListaController {
    @Autowired
    private ListaService listaService;

    /**
     * Método tipo GET usado para consultar las listas en la Base de datos
     * @return retorna las listas que existen en la BD
     */
    @GetMapping(value = "/lista")
    public Iterable<Lista> list() {
        return listaService.list();
    }
    /**
     * Método generado para crear una tarea en la base de datos que recibe la ruta o endpoint y un JSON con la información a agregar en la BD
     * @param
     * @return la inserción realizada en cada uno de los campos
     */
    @PostMapping(value = "/crearlista")
    public Lista crearLista(@RequestBody Lista lista) {
         return listaService.crearLista(lista);
    }

    /**
     * Método de tipo Delete que nos permite eliminar en la base de datos una lista recibiendo el
     * @param id y eliminando dicho registro en la BD, este método no retorna nada
     */
    @DeleteMapping(value = "/eliminarlista/{id}")
    public void borrarLista(@PathVariable("id") Long id) {
        listaService.borrarLista(id);
    }

}

