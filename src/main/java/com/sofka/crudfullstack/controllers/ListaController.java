package com.sofka.crudfullstack.controllers;


import com.sofka.crudfullstack.domains.Lista;
import com.sofka.crudfullstack.domains.Tarea;
import com.sofka.crudfullstack.services.ListaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
public class ListaController {
    @Autowired
    private ListaService listaService;

    @GetMapping(value = "/lista")
    public Iterable<Lista> list() {
        return listaService.list();
    }

    @PostMapping(value = "/crearlista")
    public Lista crearLista(@RequestBody Lista lista) {
         return listaService.crearLista(lista);
    }

    @DeleteMapping(value = "/eliminarlista/{id}")
    public void borrarLista(@PathVariable("id") Long id) {
        listaService.borrarLista(id);
    }

}

