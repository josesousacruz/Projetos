package com.backend.ProjetoIntegrador.repository;

import com.backend.ProjetoIntegrador.model.Consulta;
import com.backend.ProjetoIntegrador.model.Dentista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ConsultaRepository extends JpaRepository<Consulta,Long> {

    @Query(value = "select u from Consulta u where u.dentista.id = ?1")
    List<Consulta> buscarPorDentista(Long idDentista);

    @Query(value = "select u from Consulta u where u.paciente.id = ?1")
    List<Consulta> buscarPorPaciente(Long idPaciente);

}
