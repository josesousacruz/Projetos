package com.terminal;

import java.sql.Struct;
import java.util.*;

public abstract class Maquinas  {
    private String nomeId;
    private String dataDeAquisicao;
    private String modelo;


    public Maquinas(String nomeId, String dataDeAquisicao, String modelo) {
        this.nomeId = nomeId;
        this.dataDeAquisicao = dataDeAquisicao;
        this.modelo = modelo;
    }

    public abstract void ligar();


    public String getNomeId() {
        return nomeId;
    }

    public void setNomeId(String nomeId) {
        this.nomeId = nomeId;
    }

    public String getDataDeAquisicao() {
        return dataDeAquisicao;
    }

    public void setDataDeAquisicao(String dataDeAquisicao) {
        this.dataDeAquisicao = dataDeAquisicao;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

}
