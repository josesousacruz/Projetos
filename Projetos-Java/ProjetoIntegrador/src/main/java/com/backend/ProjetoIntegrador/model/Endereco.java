package com.backend.ProjetoIntegrador.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@SequenceGenerator(name = "seq_endereco",sequenceName = "seq_endereco",allocationSize = 1,initialValue = 1)
public class Endereco implements Serializable {
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String rua;
    private String num;
    private String bairro;
    private String cidade;
    private String estado;

    @OneToOne(mappedBy = "endereco",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Paciente paciente;

    public Endereco() {
    }

    public Endereco(long id, String rua, String num, String bairro, String cidade, String estado) {
        this.id = id;
        this.rua = rua;
        this.num = num;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    public Endereco(String rua, String num, String bairro, String cidade, String estado) {
        this.rua = rua;
        this.num = num;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    public Endereco(String rua, String num, String bairro, String cidade, String estado, Paciente paciente) {
        this.rua = rua;
        this.num = num;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.paciente = paciente;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
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


    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    @Override
    public String toString() {
        return "Endereco{" +
                "id=" + id +
                ", rua='" + rua + '\'' +
                ", num='" + num + '\'' +
                ", bairro='" + bairro + '\'' +
                ", cidade='" + cidade + '\'' +
                ", estado='" + estado + '\'' +
                '}';
    }
}
