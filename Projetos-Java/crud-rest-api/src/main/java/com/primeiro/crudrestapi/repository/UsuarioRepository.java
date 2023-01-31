package com.primeiro.crudrestapi.repository;

import com.primeiro.crudrestapi.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query(value = "select u from Usuario u where trim(u.nome) like %?1%")
    List<Usuario> buscarPorNome(String nome);


}



