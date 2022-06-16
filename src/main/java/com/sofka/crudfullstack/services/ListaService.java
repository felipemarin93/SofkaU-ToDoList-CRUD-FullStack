package com.sofka.crudfullstack.services;

import com.sofka.crudfullstack.domains.Lista;
import com.sofka.crudfullstack.repositories.ListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListaService {

    @Autowired
    private ListaRepository listaRepository;

    public Iterable<Lista> list(){
        return listaRepository.findAll();
    }

    public Lista crearLista(Lista lista){
        return listaRepository.save(lista);
    }

    public void borrarLista(Long id){
        listaRepository.delete(get(id));
    }

    public Lista get(Long id){
        return listaRepository.findById(id).orElseThrow();
    }
}
