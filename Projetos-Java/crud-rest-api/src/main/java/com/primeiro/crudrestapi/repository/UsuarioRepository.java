package com.primeiro.crudrestapi.repository;

import com.primeiro.crudrestapi.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
