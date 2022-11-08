package com.terminal;
import java.sql.Struct;
import java.util.*;

public abstract class Funcionario {
    private String nome,Cpf,matricula,funcao,senha;

    public Funcionario(String nome, String cpf, String matricula, String funcao, String senha) {
        this.nome = nome;
        this.Cpf = cpf;
        this.matricula = matricula;
        this.funcao = funcao;
        this.senha = senha;
    }

    public abstract void trabalhar();

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return Cpf;
    }

    public String getMatricula() {
        return matricula;
    }

    public String getFuncao() {
        return funcao;
    }

    public String getSenha() {
        return senha;
    }
}
