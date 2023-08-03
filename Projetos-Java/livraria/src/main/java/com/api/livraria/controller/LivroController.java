package com.api.livraria.controller;

import com.api.livraria.model.Livro;
import com.api.livraria.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @GetMapping(value = "/listartodos")
    @ResponseBody
    public ResponseEntity<List<Livro>> listarLivros(){

        List<Livro> livros =livroRepository.findAll();

        return new ResponseEntity<List<Livro>>(livros, HttpStatus.OK);
    }


    @PostMapping(value = "/salvar")
    @ResponseBody
    public ResponseEntity<?> salvar(@RequestBody Livro livro){

        Livro livros = livroRepository.save(livro);

        return new ResponseEntity<Livro>(livros,HttpStatus.OK);
    }


}
