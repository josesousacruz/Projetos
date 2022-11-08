package com.terminal;

public class Main {
    public static void main(String[] args) {

        Terminal menu = new Terminal();

        Operador almir = new Operador("almir","123","123","OPERADOR","123");
        Mecanico jose  = new Mecanico("jose","1234","1234","MECANICO","1234");

        Maquinas pc32 = new PaCarregadeira("PC32","23/02/2022","PA-CARREGADEIRA");
        Maquinas ESC33 = new Escavadeira("ESC33","23/02/2022","ESCAVADEIRA");
        Maquinas EMP34 = new Empilhadeira("EMP34","23/02/2022","EMPILHADEIRA");

        menu.adcMaquina(pc32);
        menu.adcMaquina(ESC33);
        menu.adcMaquina(EMP34);

        menu.adcFuncionario(almir);
        menu.adcFuncionario(jose);


        menu.menuInicial();










    }
}
