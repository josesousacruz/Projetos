package com.primeiro.crudrestapi.controller;

import com.primeiro.crudrestapi.model.*;
import com.primeiro.crudrestapi.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;




    @GetMapping(value = "listartodos")
    @ResponseBody
    public ResponseEntity<List<Usuario>> listaUsuario(){

        List<Usuario> usuarios = usuarioRepository.findAll();

        return new ResponseEntity<List<Usuario>>(usuarios,HttpStatus.OK);
    }

    @GetMapping(value = "hello")
    @ResponseBody
        public String hello(){


      return "Hello word";
        }






    @PostMapping(value = "salvar")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<?> salvar(@RequestBody Usuario usuario){// Solicita um objeto no formato JSON

        if (usuario.getId() != null){
            return new ResponseEntity<String>("Para salvar um novo usuario não é necessario passar o ID",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Usuario user = usuarioRepository.save(usuario); // recebe os dados para salvar

        return new ResponseEntity<Usuario>(user,HttpStatus.CREATED);
    }

    @DeleteMapping(value = "delete")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<String> delete(@RequestParam Long idUser){
        usuarioRepository.deleteById(idUser); // recebe os dados para salvar


        return new ResponseEntity<String>("Usuario deletado",HttpStatus.OK);
    }

    @GetMapping(value = "buscaruserid")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<Usuario> buscaruserid(@RequestParam Long idUser){
       Usuario usuario = usuarioRepository.findById(idUser).get(); // recebe os dados para

        return new ResponseEntity<Usuario>(usuario,HttpStatus.OK);
    }


    @PutMapping(value = "atualizarUser")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<?> atualizarUser(@RequestBody Usuario usuario){// Solicita um objeto no formato JSON
        if (usuario.getId() == null){
            return new ResponseEntity<String>("ID não informado! Favor informar ID",HttpStatus.OK);
        }
        Usuario user = usuarioRepository.saveAndFlush(usuario); // recebe os dados para atualizar
        return new ResponseEntity<Usuario>(user,HttpStatus.OK);
    }


    @GetMapping(value = "buscarPorNome")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<List<Usuario>> buscarpornome(@RequestParam(name = "nome") String nome){
        List<Usuario> usuario = usuarioRepository.buscarPorNome(nome.trim().toLowerCase()); // recebe os dados para salvar


        return new ResponseEntity<List<Usuario>>(usuario,HttpStatus.OK);
    }


}