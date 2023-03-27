package com.backend.ProjetoIntegrador.controller;


import com.backend.ProjetoIntegrador.model.Consulta;
import com.backend.ProjetoIntegrador.model.Dentista;
import com.backend.ProjetoIntegrador.repository.ConsultaRepository;
import com.backend.ProjetoIntegrador.repository.DentistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


    @RestController
    @RequestMapping("/dentista")//Para chamar metodo pela URL, após IP ou localhost / e porta que estiver rodando o Tomcat
    public class DentistaController {

    @Autowired
    private DentistaRepository dentistaRepository;

    private ConsultaRepository consultaRepository;



        @GetMapping(value = "/listartodos") // exemplo: localhost:8080/dentista/listartodos
        @ResponseBody
        public ResponseEntity<List<Dentista>> listaUsuario(){// lista todos os usuarios cadastrados no BD

            List<Dentista> dentistas = dentistaRepository.findAll();

            return new ResponseEntity<List<Dentista>>(dentistas,HttpStatus.OK);
        };




    @PostMapping(value = "/salvar")// exemplo: localhost:8080/dentista/salvar
    @ResponseBody
    public ResponseEntity<?> salvar(@RequestBody Dentista dentista){//Salva um novo dentista solicitando
        //um objeto JSON

    Dentista dentistas = dentistaRepository.save(dentista);

    return new ResponseEntity<Dentista>(dentistas, HttpStatus.OK);

    }

        @DeleteMapping(value = "delete/{idDentista}")//string para chamar o metodo pela url
        @ResponseBody//Descrição da resposta
        public ResponseEntity<String> deletePach(@PathVariable Long idDentista){
            dentistaRepository.deleteById(idDentista); // recebe os id para deletar

            return new ResponseEntity<String>("Dentista deletado",HttpStatus.OK);
        }


        @PutMapping(value = "atualizarDentista")//string para chamar o metodo pela url
        @ResponseBody//Descrição da resposta
        public ResponseEntity<?> atualizarUser(@RequestBody Dentista dentista){// Solicita um objeto no formato JSON

            if (dentistaRepository.findById(dentista.getId()) == null){
                ResponseEntity responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
            }

            Dentista user = dentistaRepository.saveAndFlush(dentista); // recebe os dados para atualizar
            return new ResponseEntity<Dentista>(user,HttpStatus.OK);
        }

        @GetMapping(value = "/buscarPorNome/{nome}")//string para chamar o metodo pela url
        @ResponseBody//Descrição da resposta
        public ResponseEntity<List<Dentista>> buscarpornomePath(@PathVariable(name = "nome") String nome){
            List<Dentista> dentistas = dentistaRepository.buscarPorNome(nome.trim().toLowerCase()); //

            return new ResponseEntity<List<Dentista>>(dentistas,HttpStatus.OK);
        }






}
