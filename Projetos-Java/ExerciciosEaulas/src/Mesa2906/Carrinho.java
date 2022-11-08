package Mesa2906;

import java.util.*;


public class Carrinho {
    private Estado estado;

    public Carrinho(Estado estado) {
        this.estado = estado;
    }

    List<Produto> produtos = new ArrayList<>();

    public void adcProdutos(Produto produto){
        produtos.add(produto);
    }

    public void cancelar(){
    }
    public void voltar(){
    }

    public void avançar(){
    }

    public void mostrarProdutos (){

        for(Produto prod: this.produtos){
            System.out.println(prod.getDescricao());
        }
    }

}
