package com.exercicios;

import java.util.Scanner;

public class DesafioNumeroPrimo {
    public static void main(String[] args) {
        int numero;
        int qtd = 0;
        int i = 1;

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite a qtd de números primos: ");
        numero = sc.nextInt();

        while (qtd < numero){
            if (numeroPrimo(i) == 2) {
                System.out.println(i);
                qtd++;
            }
            i++;
        }
    }

    public static int divisivel(int n, int divisor){

        return ((n % divisor) == 0) ? 1 : 0;
    }

    public static int numeroPrimo(int numero){
        int primo = 0;

        for (int i = 1; i <= numero; i++) {
            primo = primo + divisivel(numero,i);
        }

        return primo;
    }




}
