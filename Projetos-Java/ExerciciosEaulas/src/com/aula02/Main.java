package com.aula02;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String nome;
        String sobreNome;
        Integer dia;
        Integer mes;
        Integer ano;
        String iniciasNome;

        Scanner sc = new Scanner(System.in);
        System.out.println("Informe seu nome:");
        nome = sc.next();

        System.out.println("Informe seu sobrenome:");
        sobreNome = sc.next();

        System.out.println("Informe seu dia de nascimento");
        dia = sc.nextInt();

        System.out.println("Informe seu mes de nascimento");
        mes = sc.nextInt();

        System.out.println("Informe seu ano de nascimento");
        ano = sc.nextInt();

        iniciasNome = nome.charAt(0) + sobreNome.substring(0,1).toUpperCase() ;
        String dataCompleta = dia.toString() +"/"+mes+"/"+"/"+ano;

        System.out.println("Meu nome é" + nome +" "+ sobreNome+" "+ "minhas inicias são"+" "+ iniciasNome
        );
    }

}
