package com.MesaAula06;

import java.time.LocalDate;

public class ObjetoImpressora {
    public static void main(String[] args) {
        ImpressoraJava modelo1 = new ImpressoraJava("Modelo1","WIFI","25/05/2022",50);
        ImpressoraJava modelo2 = new ImpressoraJava("modelo2","wifi","25/05/2022",0);
        modelo2.imprimir();
    }
}
