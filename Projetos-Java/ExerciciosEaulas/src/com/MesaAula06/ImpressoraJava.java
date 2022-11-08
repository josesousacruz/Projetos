package com.MesaAula06;
/*  José Sousa
    Daniel Martins
    Marcos Fonseca
    Luiz Felipe Pinheiro
    William Freitas
    Thalles Denner

 */


import java.util.Scanner;

public class ImpressoraJava {
    private String modelo;
    private String tipoConexao;
    private String dataFabricacao;
    private Integer folhas;


    public ImpressoraJava(String modelo, String tipoConexao, String dataFabricacao, Integer folhas) {
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.dataFabricacao = dataFabricacao;
        this.folhas = folhas;
    }




    public boolean temPapel() {
        if (folhas > 0) {
            return true;
        } else {
            return false;
        }
    }

    public void imprimir() {
        if (temPapel()) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Insira o texto desejado");
            String texto = sc.next();
            System.out.println(texto);
        }else {
            System.out.println("Recarregar bandeja de papel");
        }
    }





}
