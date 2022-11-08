import model.Pessoa;

import java.io.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args)  {

        Pessoa pessoa = new Pessoa("Pessoa1",24,1232445);
        Pessoa pessoa2 = new Pessoa("Pessoa2",24,1232445);
        Pessoa pessoa3 = new Pessoa("Pessoa3",24,1232445);
        Pessoa pessoa4 = new Pessoa("Pessoa4",24,1232445);

        ArrayList<Pessoa>  lista = new ArrayList<>();




        lista.add(pessoa);

        lista.add(pessoa2);

        lista.add(pessoa3);

        lista.add(pessoa4);


        try {

            //Salva os dados em um arquivo
            FileOutputStream fileOut = new FileOutputStream("pessoas.txt");//nome do arquivo
            ObjectOutputStream obejtoOut = new ObjectOutputStream(fileOut);// coloco objeto dentro do arquivo
            obejtoOut.writeObject(lista);//escrevo dentro do arquivo


            obejtoOut.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        try {

        //Recupera os dados de um arquivo
        FileInputStream fileIn = new FileInputStream("pessoas.txt");
        ObjectInputStream objetoIn = new ObjectInputStream(fileIn);


        ArrayList<Pessoa> pessoas;

        pessoas = (ArrayList<Pessoa>) objetoIn.readObject();


        //ForEach
        for (Pessoa p: pessoas) {
            System.out.println(p);//Para cada Objeto Pessoa no ArrayList em pessoa imprime
        }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

    }
}
