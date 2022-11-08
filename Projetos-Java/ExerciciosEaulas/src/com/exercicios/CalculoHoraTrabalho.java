package com.exercicios;

import java.util.Scanner;

public class CalculoHoraTrabalho {
   static double horasSemanais = 40; // em horas
   static double porcentagemDaExtra = 0.5; // dividido por 100
   static double valorPorSemana = 875; // em reais
   static double valorHora;
   static double valorHoraExtra;
   static double horasTrabalhadas;
   static double horasExtras;


    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        System.out.println("Informe as horas trabalhadas esta semana");
        horasTrabalhadas = sc.nextInt();

        calcValorReceber(horasTrabalhadas);


    }

    public static void calcValorReceber(double horasTrabalhadas){
        if (horasTrabalhadas <= horasSemanais) {
            valorHora = (valorPorSemana / horasSemanais);
            System.out.println(valorHora * horasTrabalhadas);

        } else if (horasTrabalhadas >= horasSemanais) {
            valorHora = (valorPorSemana / horasSemanais);
            System.out.println( (valorHora * horasTrabalhadas) + (calcHorasExtras(horasTrabalhadas,horasSemanais)));

        }

    }
    public static double calcHorasExtras(double horasTrabalhadas, double horasSemanais){
       horasExtras = (horasTrabalhadas - horasSemanais);
       valorHora = (valorPorSemana / horasSemanais);
       valorHoraExtra = (valorHora * porcentagemDaExtra);

       return horasExtras * valorHoraExtra;




    }
}
