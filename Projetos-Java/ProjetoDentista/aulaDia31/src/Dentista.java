public class Dentista {
private String Nome;
private String sobreNome;
private  int matricula;

    public Dentista(String sobreNome, String nome, int matricula) {
        Nome = nome;
        this.sobreNome = sobreNome;
        this.matricula = matricula;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getSobreNome() {
        return sobreNome;
    }

    public void setSobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
    }

    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }
}
