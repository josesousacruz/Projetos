package com.aula05;

public class BancoDigitalJava {
    private  int numeroCliente;
    private String nome;
    private Double divida;

    public BancoDigitalJava(int numeroCliente, String nome) {
        this.numeroCliente = numeroCliente;
        this.nome = nome;
        this.divida = 0D;
    }


    public void aumentarDivida(Double valor){
        //calcula o valor da divida + aumento da divida
        this.divida += valor;
        System.out.println("A divida do cliente"+ this.nome+
        " é de R$ "+ this.divida);
    }

    public void pagarDivida(Double valor){
        // calcula quanto pagou e oq falta da divida
        if (this.divida > 0){
        this.divida -= valor;
        System.out.println("A divida do cliente"+ this.nome+
        " é de"+ this.divida        );
        }else {
            System.out.println("Não existe dividas");
        };
    }



    public int getNumeroCliente() {
        return numeroCliente;
    }

    public void setNumeroCliente(int numeroCliente) {
        this.numeroCliente = numeroCliente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getDivida() {
        return divida;
    }

}
