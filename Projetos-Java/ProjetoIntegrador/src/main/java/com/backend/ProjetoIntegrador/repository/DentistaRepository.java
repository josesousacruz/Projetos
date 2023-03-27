package com.backend.ProjetoIntegrador.repository;

import com.backend.ProjetoIntegrador.model.Consulta;
import com.backend.ProjetoIntegrador.model.Dentista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
    public interface DentistaRepository extends JpaRepository<Dentista,Long> {

    @Query(value = "select u from Dentista u where trim(u.nome) like %?1%")
    List<Dentista> buscarPorNome(String nome);



}
