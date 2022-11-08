package com.aula05;

public class ObjetoBancoDigital {
    public static void main(String[] args) {
        BancoDigitalJava cliente1 = new BancoDigitalJava(1,"José");

        cliente1.aumentarDivida(1000.0);
        cliente1.pagarDivida(1000.0);
    }
}
