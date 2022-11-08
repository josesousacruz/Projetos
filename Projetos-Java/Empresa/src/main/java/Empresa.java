import java.io.Serializable;
import java.util.ArrayList;

public class Empresa implements Serializable {
    private int cnpj;
    private String razaoSocial;

    private ArrayList<Funcionario> funcionario;

    public ArrayList<Funcionario> getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(ArrayList<Funcionario> funcionario) {
        this.funcionario = funcionario;
    }

    public Empresa(int cnpj, String razaoSocial) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    public int getCnpj() {
        return cnpj;
    }

    public void setCnpj(int cnpj) {
        this.cnpj = cnpj;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "cnpj=" + cnpj +
                ", razaoSocial='" + razaoSocial + '\'' +
                '}';
    }
}
