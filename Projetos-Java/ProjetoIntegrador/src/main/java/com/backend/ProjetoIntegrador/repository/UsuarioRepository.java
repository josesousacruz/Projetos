package com.backend.ProjetoIntegrador.repository;

import com.backend.ProjetoIntegrador.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    Usuario findByLogin(String login);
}
