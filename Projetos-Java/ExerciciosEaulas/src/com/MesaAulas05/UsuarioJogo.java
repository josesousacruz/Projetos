package com.MesaAulas05;
//Para desenvolver um jogo, precisamos implementar a classe UsuarioJogo.
// Os usuários possuem nome e um nickname, e estes dados devem ser fornecidos ao criar um novo usuário. Inicialmente, a pontuação é zero.
// Porém, eles podem aumentar esse nível em 1.
//Assim, devemos fornecer um método para realizar esse aumento.
// O usuário também pode receber um bônus, ou seja, um valor extra que é acrescentado em sua pontuação.

//Com base no diagrama de classe, implemente o código da classe UsuarioJogo para provar que o diagrama criado é válido.
// Crie dois objetos da classe UsuarioJogo com pontuações e níveis diferentes.

//nome: String
//nickname: String
//pontuacao: int
//nivel: int

public class UsuarioJogo {
    private  String nome;
    private  String nickname;
    private  Integer pontuacao;
    private Integer nivel ;

    public UsuarioJogo(String nome, String nickname) {
        this.nome = nome;
        this.nickname = nickname;
        this.pontuacao = 0;
        this.nivel = 0;
    }

    public void acrecentarPontuacao(Integer pontos){
        this.pontuacao += pontos;
        System.out.println("Pontos acrecentados "+ this.pontuacao);
    }

    public void subirNivel(){
        Integer pontuacao = getPontuacao();
        if (pontuacao>=50){
           this.nivel++;
            System.out.println("Nivel do jogador "+ this.nivel);
        }else{
            System.out.println("Pontuação insuficiente para subir de nivel!");
        }
    }

    public void bonus(){
        this.pontuacao += 30;
    }



    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Integer getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }

    public Integer getNivel() {
        return nivel;
    }


}
