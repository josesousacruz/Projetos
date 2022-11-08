package com.primeiro.crudrestapi.controller;

import com.primeiro.crudrestapi.model.Usuario;
import com.primeiro.crudrestapi.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Id;
import java.util.List;


@RestController
public class StatusController {

    @Autowired
    private UsuarioRepository usuarioRepository;




    @GetMapping(value = "listartodos")
    @ResponseBody
    public ResponseEntity<List<Usuario>> listaUsuario(){

        List<Usuario> usuarios = usuarioRepository.findAll();

        return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
    }


    @PostMapping(value = "salvar")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<Usuario> salvar(@RequestBody Usuario usuario){// Solicita um objeto no formato JSON
        //Não passar o ID caso um novo.
        Usuario user = usuarioRepository.save(usuario); // recebe os dados para salvar

        return new ResponseEntity<Usuario>(user,HttpStatus.CREATED);
    }

    @DeleteMapping(value = "delete")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<String> delete(@RequestParam Long idUser){
        usuarioRepository.deleteById(idUser); // recebe os dados para salvar


        return new ResponseEntity<String>("Usuario deletado",HttpStatus.OK);
    }


}