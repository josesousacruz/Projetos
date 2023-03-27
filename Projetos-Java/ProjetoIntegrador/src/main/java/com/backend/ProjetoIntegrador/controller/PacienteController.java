package com.backend.ProjetoIntegrador.controller;


import com.backend.ProjetoIntegrador.model.Dentista;
import com.backend.ProjetoIntegrador.model.Paciente;
import com.backend.ProjetoIntegrador.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paciente")
public class PacienteController {
    @Autowired
    private PacienteRepository pacienteRepository;

    @GetMapping(value = "/listartodos")
    @ResponseBody
    public ResponseEntity<List<Paciente>>listaPaciente(){
        List<Paciente> pacientes = pacienteRepository.findAll();
        return new ResponseEntity<List<Paciente>>(pacientes, HttpStatus.OK);
    }

    @PostMapping(value = "/salvar")
    @ResponseBody
    public ResponseEntity<?> salvar(@RequestBody Paciente paciente){

        Paciente pacientes = pacienteRepository.save(paciente);
        return new ResponseEntity<Paciente>(paciente,HttpStatus.OK);

    }


    @DeleteMapping(value = "/delete/{idPaciente}")
    @ResponseBody
    public ResponseEntity<?> delete(@PathVariable Long idPaciente) {
        pacienteRepository.deleteById(idPaciente);
        return new ResponseEntity<String>("paciente deletado", HttpStatus.OK);
    }

    //update
    @PutMapping(value = "atualizarPaciente")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<?> atualizarUser(@RequestBody Paciente paciente){// Solicita um objeto no formato JSON

        if (pacienteRepository.findById(paciente.getId()) == null){
            ResponseEntity responseEntity = new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        Paciente user = pacienteRepository.saveAndFlush(paciente); // recebe os dados para atualizar
        return new ResponseEntity<Paciente>(user,HttpStatus.OK);
    }


    @GetMapping(value = "/buscarPorNome/{nome}")//string para chamar o metodo pela url
    @ResponseBody//Descrição da resposta
    public ResponseEntity<List<Paciente>> buscarpornomePath(@PathVariable(name = "nome") String nome){
        List<Paciente> pacientes = pacienteRepository.buscarPorNome(nome.trim().toLowerCase()); //

        return new ResponseEntity<List<Paciente>>(pacientes,HttpStatus.OK);
    }

}
