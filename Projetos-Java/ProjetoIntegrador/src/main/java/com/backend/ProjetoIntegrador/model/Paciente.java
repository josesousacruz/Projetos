package com.backend.ProjetoIntegrador.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@SequenceGenerator(name = "seq_paciente",sequenceName = "seq_paciente",allocationSize = 1,initialValue = 1)
public class Paciente implements Serializable {
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private String data;


    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Id_endereco")
    private Endereco endereco;

    @OneToMany(mappedBy = "paciente",cascade = CascadeType.ALL)
    private List<Consulta> consultas;


    public Paciente() {
    }

    public Paciente(long id) {
        this.id = id;
    }


    public Paciente(long id, String nome, String sobrenome, String cpf, String data, Endereco endereco) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.data = data;
        this.endereco = endereco;
    }

    public Paciente(String nome, String sobrenome, String cpf, String data, Endereco endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.data = data;
        this.endereco = endereco;
    }

    public Paciente(String nome, String sobrenome, String cpf, String data) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.data = data;
    }

    public Paciente(String nome, String sobrenome, String cpf, String data, Endereco endereco, List<Consulta> consultas) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.data = data;
        this.endereco = endereco;
        this.consultas = consultas;
    }

    public long getId() {
        return id;
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

//    public List<Consulta> getConsultas() {
//        return consultas;
//    }

    public void setConsultas(List<Consulta> consultas) {
        this.consultas = consultas;
    }

        public String getEndereco() {
        return endereco.getCidade();
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }


    @Override
    public String toString() {
        return "Paciente{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", data=" + data +
                ", endereco=" + endereco +
                '}';
    }
}
