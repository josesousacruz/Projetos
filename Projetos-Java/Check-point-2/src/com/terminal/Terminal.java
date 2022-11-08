package com.terminal;

import java.util.*;

;
public class Terminal {
    Scanner entrada = new Scanner(System.in);

    List<CheckLists> listaCheck = new ArrayList<>();
    List<Maquinas> listaDeMaquinas = new ArrayList<>();
    List<Funcionario> listaDeFuncionario = new ArrayList<>();

public void menuInicial(){
    String opcao;

    System.out.println("1) Logar no aplicativo\n"+"2)Cadastrar funcionario\n"+
            "Digite o numero correspondente ao que deseja fazer ou digite qualquer outro caractere para sair: ");

    opcao = entrada.next();

    do {
        if (opcao.equalsIgnoreCase("1")){
            logar();
        } else if (opcao.equalsIgnoreCase("2")) {
            cadastrarFuncionario();
        }
    }while (opcao == "1" || opcao =="2");

}

    public void logar(){
        String cpf,senha;

        try {

        System.out.println("Digite o seu cpf: ");
        cpf = entrada.next();
        System.out.println("Digite a sua senha: ");
        senha = entrada.next();

        if (listaDeFuncionario.size()<1){
            System.out.println("Favor cadastrar um usuario");
            menuInicial();
        }else{
            int i;
            for (i=0;i<listaDeFuncionario.size();i++){
                if (cpf.equalsIgnoreCase(listaDeFuncionario.get(i).getCpf()) &&
                        senha.equalsIgnoreCase(listaDeFuncionario.get(i).getSenha()))
                {
                    System.out.println("Logado com sucesso");
                    menuDeMaquinas();
                }else{
                    System.out.println("CPF ou Senha incorreta!");
                    menuInicial();
                }
            }
        }

    }catch (InputMismatchException exception){
        System.out.println("Voce inseriu um tipo de dado incorreto");
    }


    }

    public void cadastrarFuncionario(){
        String nome,cpf,funcao,senha,matricula;


        System.out.println("Digite o nome do funcionario: ");
        nome = entrada.next();
        System.out.println("Digite o cpf do funcionario: ");
        cpf = entrada.next();
        System.out.println("Digite a funcao do funcionario");
        System.out.println("1) Operador\n"+"2)Mecanico\n");
        funcao = entrada.next();
        System.out.println("Digite a senha do funcionario");
        senha = entrada.next();
        System.out.println("Digite a matricula do funcionario (Numeros inteiros)");
        matricula = entrada.next();


        //Salvar os dados no ArrayList
        if (funcao.equalsIgnoreCase("2")){
            listaDeFuncionario.add(new Mecanico(nome,cpf,funcao,senha,matricula));
            System.out.println("Cadastro concluido");
            menuDeMaquinas();
        } else if (funcao.equalsIgnoreCase("1")) {
            listaDeFuncionario.add(new Operador(nome,cpf,funcao,senha,matricula));
            System.out.println("Cadastro concluido");
            menuDeMaquinas();
        }else {
            System.out.println("Funcao não existente");
        }
    }


    public void adcFuncionario(Funcionario funcionario){
    listaDeFuncionario.add(funcionario);
    }


    public void menuDeMaquinas(){
    String opcao;

    System.out.println("A) Fazer check-list\n"+"B) Cadastrar Maquina\n"+ "C) Consultar check-lists\n"
            + "Digite a letra correspondente ao que deseja fazer ou digite qualquer outro caractere para sair: ");

    opcao = entrada.next();

    do {
        if (opcao.equalsIgnoreCase("a")) {
            doCheckList();
        } else if (opcao.equalsIgnoreCase("b")) {
            cadastrarMaquina();
        } else if (opcao.equalsIgnoreCase("c")) {
            consultaCheckList();
            System.out.println("Consultar Check-Lists");
        }
    } while (opcao == "A" || opcao == "B" || opcao == "C");


}

    public void cadastrarMaquina(){
        String nomeId,modelo,datadeAquisicao;


        System.out.println("Digite o nome da Maquina: ");
        nomeId = entrada.next();
        System.out.println("Digite a data de aquisição do equipamento: ");
        datadeAquisicao = entrada.next();
        System.out.println("Digite o modelo da maquina: ");
        System.out.println("1) Empilhadeira\n"+"2)PA-CARREGADEIRA\n"+"3)ESCAVADEIRA");
        modelo = entrada.next();

        //Salvar os dados no ArrayList
        if (modelo.equalsIgnoreCase("1")) {
            listaDeMaquinas.add(new Empilhadeira(nomeId, datadeAquisicao, modelo));
        } else if (modelo.equalsIgnoreCase("2")) {
            listaDeMaquinas.add(new PaCarregadeira(nomeId, datadeAquisicao, modelo));
        } else if (modelo.equalsIgnoreCase("3")) {
            listaDeMaquinas.add(new Escavadeira(nomeId, datadeAquisicao, modelo));
        }
        System.out.println("Cadastro concluido");
        menuDeMaquinas();
    }

    public void adcMaquina(Maquinas maquina){
    listaDeMaquinas.add(maquina);
    }



    public void doCheckList(){

        if (listaDeMaquinas.size()<1){
            System.out.println("Nenhuma maquina disponivel para Operação!");
            menuDeMaquinas();
        }else {

            System.out.println("-----------------------------------");
            System.out.println("MAQUINAS DISPONIVEIS NO TERMINAL");

            int i;
            for (i = 0; i < listaDeMaquinas.size(); i++)
                System.out.println(listaDeMaquinas.get(i).getNomeId());
            System.out.println("-----------------------------------");

            //variaveis locais
            String nomeId, sistemIluminacao, sistemHidraulico, estruMecanica, motor, pneus;


            System.out.println("Informe a maquina para realizar o check-list");
            nomeId = entrada.next();
            System.out.println("True para Conformidade ou False para nao conformidade");
            System.out.println("Sistema de Iluminacao");
            sistemIluminacao = entrada.next();
            System.out.println("Sistema Hidraulico");
            sistemHidraulico = entrada.next();
            System.out.println("Estrutura mecanica");
            estruMecanica = entrada.next();
            System.out.println("Motor");
            motor = entrada.next();
            System.out.println("Pneus");
            pneus = entrada.next();


            listaCheck.add(new CheckLists(nomeId, sistemIluminacao, sistemHidraulico, estruMecanica, motor, pneus));
            System.out.println("Check-List concluido");
            menuDeMaquinas();
        }

    }

    public void consultaCheckList(){
        System.out.println("Digite o nome da Maquina: ");
        System.out.println("MAQUINAS DISPONIVEIS NO TERMINAL");
        int i;
        for (i = 0; i < listaDeMaquinas.size(); i++){
            System.out.println(listaDeMaquinas.get(i).getNomeId());}
        System.out.println("-----------------------------------");
        String nomeId = entrada.next();
        System.out.println("-----------------------------------");
        System.out.println("CHECK-LISTS DA MAQUINA: "+nomeId);

        for (i=0;i<listaDeMaquinas.size();i++){
        if (nomeId.equalsIgnoreCase(listaDeMaquinas.get(i).getNomeId())){
            System.out.println(listaCheck.get(i));
        }}
        System.out.println("consulta concluida");
        menuDeMaquinas();

    }




}
