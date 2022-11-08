package com.RedeHoteis.model;

public class Hotel {
    private Integer id;
    private String nomeFilial;
    private String rua;
    private int numero;
    private String cidade;
    private String estado;
    private boolean e5Strelas;

    public Hotel(Integer id, String nomeFilial, String rua, int numero, String cidade, String estado, boolean e5Strelas) {
        this.id = id;
        this.nomeFilial = nomeFilial;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.e5Strelas = e5Strelas;
    }
    public Hotel(String nomeFilial, String rua, int numero, String cidade, String estado, boolean e5Strelas) {
        this.nomeFilial = nomeFilial;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.e5Strelas = e5Strelas;
    }

    public Hotel() {}



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeFilial() {
        return nomeFilial;
    }

    public void setNomeFilial(String nomeFilial) {
        this.nomeFilial = nomeFilial;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public boolean isE5Strelas() {
        return e5Strelas;
    }

    public void setE5Strelas(boolean e5Strelas) {
        this.e5Strelas = e5Strelas;
    }
}
