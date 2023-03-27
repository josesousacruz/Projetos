package com.backend.ProjetoIntegrador.repository;


import com.backend.ProjetoIntegrador.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco,Long> {

}
