package com.MesaAula06;

public class adocaoDogs {
    private boolean aptoAdocao;
    private String raca;
    private int anoNascimento;
    private double peso;
    private boolean chip;
    private boolean saude;
    private String nome;

    public adocaoDogs(String raca, int anoNascimento, double peso, boolean chip, boolean saude, String nome) {
        this.raca = raca;
        this.anoNascimento = anoNascimento;
        this.peso = peso;
        this.chip = chip;
        this.saude = saude;
        this.nome = nome;
    }

    public boolean aptoAdocao(){
        if (saude == true && peso > 5){
            return true;
        }else {
            return false;
        }
    }



    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public int getAnoNascimento() {
        return anoNascimento;
    }

    public void setAnoNascimento(int anoNascimento) {
        this.anoNascimento = anoNascimento;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public boolean isChip() {
        return chip;
    }

    public void setChip(boolean chip) {
        this.chip = chip;
    }

    public boolean isSaude() {
        return saude;
    }

    public void setSaude(boolean saude) {
        this.saude = saude;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
