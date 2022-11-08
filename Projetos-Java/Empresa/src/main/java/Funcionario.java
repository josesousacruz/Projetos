import java.io.Serializable;

public class Funcionario implements Serializable {
    private String nome;
    private String sobreNome;
    private String documento;
    private double salario;

    public Funcionario(String nome, String sobreNome, String documento, double salario) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.documento = documento;
        this.salario = salario;
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

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", sobreNome='" + sobreNome + '\'' +
                ", documento='" + documento + '\'' +
                ", salario=" + salario +
                '}';
    }
}
