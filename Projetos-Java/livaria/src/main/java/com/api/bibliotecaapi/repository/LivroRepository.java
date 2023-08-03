package com.api.bibliotecaapi.repository;

import com.api.bibliotecaapi.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository  extends JpaRepository<Livro,Long> {
}
