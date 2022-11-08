package com.exercicios;

import java.util.Scanner;

public class PedraPapelTesouraComSwitch {
    static String jogador1;
    static String jogador2;
    static String escolha1;
    static String escolha2;
   static int ponto1 = 0;
    static int ponto2 = 0;
    static int empate = 0;

    public static void main(String[] args) {




        Scanner sc = new Scanner(System.in);
        //Nomes
        System.out.println("Digite o nome do Jogador1 :");
        jogador1 = sc.next().toUpperCase();
        System.out.println("Digite o nome do Jogador2 :");
        jogador2 = sc.next().toUpperCase();


        do {
            System.out.println("Por favor escolha entre Pedra, Papel ou Tesoura");
            System.out.println(jogador1+" faça sua escolha");
            escolha1 = sc.next().toUpperCase();
            if (!escolha1.equals("*")) {
                System.out.println("Por favor escolha entre Pedra, Papel ou Tesoura");
                System.out.println(jogador2+" faça sua escolha");
                escolha2 = sc.next().toUpperCase();

                whichWin(escolha1,escolha2);
            }


        }while(!escolha1.equals("*"));

        System.out.println("Placar final: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);


        }

       public static void whichWin(String escolha1,String escolha2){

           switch (escolha1){
               case "PEDRA":

                   switch (escolha2){
                       case "PEDRA":
                           System.out.println("Empate");
                           empate++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("----------------------------------------Nova rodada------------------------------------------");
                           break;
                       case "PAPEL":
                           System.out.println(jogador2+" Venceu");
                           ponto2++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("----------------------------------------Nova rodada-----------------------------------------");
                           break;
                       case "TESOURA":
                           System.out.println(jogador1+" Venceu");
                           ponto1++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("----------------------------------------Nova rodada------------------------------------------");
                           break;

                       default:
                           System.out.println("Rodade invalida!");
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("-----------------------------------------Nova rodada-----------------------------------------");
                   }break;
               case "PAPEL":
                   switch (escolha2){
                       case "PEDRA":
                           System.out.println(jogador1+" Venceu");
                           ponto1++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("-----------------------------------------Nova rodada-----------------------------------------");
                           break;
                       case "PAPEL":
                           System.out.println("Empate");
                           empate++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("-----------------------------------------Nova rodada-----------------------------------------");
                           break;
                       case "TESOURA":
                           System.out.println(jogador2+" Venceu");
                           ponto2++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("------------------------------------------Nova rodada----------------------------------------");
                           break;
                       default:
                           System.out.println("Rodade invalida!");
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("-----------------------------------------Nova rodada-----------------------------------------");

                   }break;
               case "TESOURA":
                   switch (escolha2){
                       case "PEDRA":
                           System.out.println(jogador2+" Venceu");
                           ponto2++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("-------------------------------------------Nova rodada---------------------------------------");
                           break;


                       case "PAPEL":
                           System.out.println(jogador1+" Venceu");
                           ponto1++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("--------------------------------------------Nova rodada--------------------------------------");
                           break;

                       case "TESOURA":
                           System.out.println("Empate");
                           empate++;
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("---------------------------------------------Nova rodada------------------------------------");
                           break;
                       default:
                           System.out.println("Rodade invalida!");
                           System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                           System.out.println("-----------------------------------------Nova rodada-----------------------------------------");

                   }break;

               default:
                   System.out.println("Rodade invalida!");
                   System.out.println("Placar: "+jogador1+":"+ponto1+" | "+jogador2+":"+ponto2 + " | Empate: "+empate);
                   System.out.println("-----------------------------------------Nova rodada-----------------------------------------");




           }

        }




}
