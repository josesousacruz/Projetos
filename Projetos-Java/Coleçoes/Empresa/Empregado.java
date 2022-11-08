package Coleçoes.Empresa;

import java.util.Date;

public class Empregado {
    private String nome;
    private Date dataDeContratação;

    public int calcularTempConServ(){
        Date dataAtual = new Date();
        return dataAtual.getYear() - dataDeContratação.getYear();
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {

        this.nome = nome;
    }

    public Date getDataDeContratação() {

        return dataDeContratação;
    }

    public void setDataDeContratação(Date dataDeContratação) {

        this.dataDeContratação = dataDeContratação;
    }
}
