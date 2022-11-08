package com.terminal;

public class Mecanico extends Funcionario {


    public Mecanico(String nome, String cpf, String matricula, String funcao, String senha) {
        super(nome, cpf, matricula, funcao, senha);
    }

    @Override
    public void trabalhar() {
         new Terminal().doCheckList();

    }


}
