import java.io.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        Empresa empresa = new Empresa(83827271,"Empresa");//Criar empresa

        Funcionario funcionario1 = new Funcionario("funcio1","SobreNome","92387121",2000d);
        Funcionario funcionario2 = new Funcionario("funcio2","SobreNome","92387121",2000d);
        Funcionario funcionario3 = new Funcionario("funcio3","SobreNome","92387121",2000d);
        Funcionario funcionario4 = new Funcionario("funcio4","SobreNome","92387121",2000d);
        //Criar funcionarios

        ArrayList<Funcionario> funcionarios = new ArrayList<>();
        //Criar array onde vão os funcionarios

        funcionarios.add(funcionario1);
        funcionarios.add(funcionario2);
        funcionarios.add(funcionario3);
        funcionarios.add(funcionario4);
        //adiciono os funcionarios no array

        empresa.setFuncionario(funcionarios);
        //Seta o array para funcionarios

        try {
            FileOutputStream fileOutputStream = new FileOutputStream("empresa.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
            objectOutputStream.writeObject(funcionarios);

            objectOutputStream.close();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        try {
            FileInputStream fileInputStream = new FileInputStream("empresa.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);


            ArrayList<Funcionario> empresaLista;

            empresaLista = (ArrayList<Funcionario>) objectInputStream.readObject();

            System.out.println(empresa.getRazaoSocial());
            for (Funcionario f : empresaLista ) {
                System.out.println(f.getNome()+"; "+f.getSobreNome()+"; "+f.getDocumento()
                +"; "+f.getSalario());

            }


            objectInputStream.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

    }
}
