package com.backend.ProjetoIntegrador.model;



import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@SequenceGenerator(name = "seq_dentista",sequenceName = "seq_dentista",allocationSize = 1,initialValue = 1)
public class Dentista implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;

    private String sobreNome;

    private String matricula;

    private String cadastro;


    @OneToMany(mappedBy = "dentista",cascade = CascadeType.ALL)
  private List<Consulta> consultas;


    public Dentista() {
    }

    public Dentista(long id) {
        this.id = id;
    }

    public Dentista(String nome, String sobreNome, String matricula, String cadastro) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.matricula = matricula;
        this.cadastro = cadastro;
    }

    public Dentista(long id, String nome, String sobreNome, String matricula, String cadastro, ArrayList<Consulta> consultas) {
        this.id = id;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.matricula = matricula;
        this.cadastro = cadastro;
        this.consultas = consultas;
    }

    public Dentista(String nome, String sobreNome, String matricula, String cadastro, ArrayList<Consulta> consultas) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.matricula = matricula;
        this.cadastro = cadastro;
        this.consultas = consultas;
    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobreNome() {
        return sobreNome;
    }

    public void setSobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getCadastro() {
        return cadastro;
    }

    public void setCadastro(String cadastro) {
        this.cadastro = cadastro;
    }

//    public List<Consulta> getConsultas() {
//        return consultas;
//    }

    public void setConsultas(List<Consulta> consultas) {
        this.consultas = consultas;
    }

    @Override
    public String toString() {
        return "Dentista{" +
                "nome='" + nome + '\'' +
                ", sobreNome='" + sobreNome + '\'' +
                ", matricula='" + matricula + '\'' +
                ", cadastro='" + cadastro + '\'' +
                '}';
    }
}
