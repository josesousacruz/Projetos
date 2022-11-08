import java.io.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        Contato contato1 = new Contato("contato1","contato@hotmail.com",7372718);
        Contato contato2 = new Contato("contato1","contato@hotmail.com",7372718);
        Contato contato3 = new Contato("contato1","contato@hotmail.com",7372718);

        ArrayList<Contato> contatos = new ArrayList<>();

        contatos.add(contato1);
        contatos.add(contato2);
        contatos.add(contato3);


        try {

            FileOutputStream fileOutputStream = new FileOutputStream("contatos.txt"); //Cria um arquivo
            ObjectOutputStream objectOutputStream  = new ObjectOutputStream(fileOutputStream);//Coloca um objeto no arquivo
            objectOutputStream.writeObject(contatos);//Escrever dentro do arquivo

            objectOutputStream.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {

            FileInputStream fileInputStream = new FileInputStream("contatos.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);


            ArrayList<Contato> contatosRecuperados;

            contatosRecuperados = (ArrayList<Contato>) objectInputStream.readObject();


            for (Contato contato : contatosRecuperados ) {
                System.out.println(contato.toString());
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
