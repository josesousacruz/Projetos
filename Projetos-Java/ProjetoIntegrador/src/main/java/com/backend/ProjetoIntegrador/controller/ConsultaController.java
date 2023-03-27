package com.backend.ProjetoIntegrador.controller;


import com.backend.ProjetoIntegrador.exceptions.ResourceNotFoundException;
import com.backend.ProjetoIntegrador.model.Consulta;
import com.backend.ProjetoIntegrador.model.Dentista;
import com.backend.ProjetoIntegrador.model.Paciente;
import com.backend.ProjetoIntegrador.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consulta")
public class ConsultaController {

    @Autowired
    private ConsultaRepository consultaRepository;


    @PostMapping(value = "/salvar")
    @ResponseBody
    public ResponseEntity<?> salvar(@RequestBody Consulta consulta) throws ResourceNotFoundException {

        try {
            Consulta consultas = consultaRepository.save(consulta);
            return new ResponseEntity<Consulta>(consulta, HttpStatus.OK);
        }catch (Exception e){
            throw new ResourceNotFoundException("Não foi possivel adicionar uma consulta");
        }
    }

    @ExceptionHandler
    public ResponseEntity<String> processarErrorNotFound(ResourceNotFoundException ex){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getLocalizedMessage());
    }




    @GetMapping(value = "/listartodos") // exemplo: localhost:8080/consulta/listartodos
    @ResponseBody
    public ResponseEntity<List<Consulta>> listaConsulta(){

        List<Consulta> consultas = consultaRepository.findAll();

        return new ResponseEntity<List<Consulta>>(consultas,HttpStatus.OK);
    };


    @DeleteMapping(value = "delete/{idConsulta}")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<?> deletePach(@PathVariable Long idConsulta){
        consultaRepository.deleteById(idConsulta); // recebe os id para deletar

        return new ResponseEntity<String>("Consulta deletada",HttpStatus.OK);
    }

    @PutMapping(value = "atualizarConsulta")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<?> atualizarConsulta(@RequestBody Consulta consulta){// Solicita um objeto no formato JSON

        if (consultaRepository.findById(consulta.getId()) == null){
            ResponseEntity responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        Consulta con = consultaRepository.saveAndFlush(consulta); // recebe os dados para atualizar
        return new ResponseEntity<Consulta>(con,HttpStatus.OK);
    }

    @GetMapping(value = "/buscarConsultaPorDentista/{idDentista}")
    @ResponseBody
    public ResponseEntity<List<Consulta>> buscarConsultasDentista(@PathVariable Long idDentista){

        List<Consulta> consultas = consultaRepository.buscarPorDentista(idDentista);

        return new ResponseEntity<List<Consulta>>(consultas,HttpStatus.OK);
    }

    @GetMapping(value = "/buscarConsultaPorPaciente/{idPaciente}")
    @ResponseBody
    public ResponseEntity<List<Consulta>> buscarConsultasPaciente(@PathVariable Long idPaciente){

        List<Consulta> consultas = consultaRepository.buscarPorPaciente(idPaciente);

        return new ResponseEntity<List<Consulta>>(consultas,HttpStatus.OK);
    }



}