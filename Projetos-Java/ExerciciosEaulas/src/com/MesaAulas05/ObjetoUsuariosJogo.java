package com.MesaAulas05;

public class ObjetoUsuariosJogo {
    public static void main(String[] args) {
        UsuarioJogo jogador1 = new UsuarioJogo("João","Joãozinho");
        UsuarioJogo jogador2 = new UsuarioJogo("Maria","Mariazinha");

        jogador1.acrecentarPontuacao(101);
        jogador1.subirNivel();
    }
}
