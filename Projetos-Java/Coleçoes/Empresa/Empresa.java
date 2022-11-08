package Coleçoes.Empresa;

import java.util.*;

public class Empresa {
    private String nome;
    private String cnpj;

    private List<Empregado> empregados = new ArrayList<>();

    public Empresa(String nome) {
        this.nome = nome;
    }

    public void adcEmpregados(Empregado empregado){

        empregados.add(empregado);
    }


    public int quantidadeEmpregados(){
      return empregados.size();
    };

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
