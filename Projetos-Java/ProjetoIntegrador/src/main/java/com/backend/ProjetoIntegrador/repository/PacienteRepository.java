package com.backend.ProjetoIntegrador.repository;


import com.backend.ProjetoIntegrador.model.Dentista;
import com.backend.ProjetoIntegrador.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente,Long> {
    @Query(value = "select u from Paciente u where trim(u.nome) like %?1%")
    List<Paciente> buscarPorNome(String nome);
}
