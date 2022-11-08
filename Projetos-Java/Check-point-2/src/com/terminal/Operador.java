package com.terminal;

public class Operador extends Funcionario{


    public Operador(String nome, String cpf, String matricula, String funcao, String senha) {
        super(nome, cpf, matricula, funcao, senha);
    }

    @Override
    public void trabalhar() {
        new Terminal().doCheckList();
    }
}
