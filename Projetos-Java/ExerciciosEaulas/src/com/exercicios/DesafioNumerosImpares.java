package com.exercicios;

import java.util.Scanner;

public class DesafioNumerosImpares {
    public static void main(String[] args) {
        int numero;
        int qtd = 0;
        int in = 1;

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite a qtd de números primos: ");
        numero = sc.nextInt();

        while (qtd < numero){
            if (in%2 != 0) {
                System.out.println(in);
                qtd++;
            }
            in++;
        }
    }
}
