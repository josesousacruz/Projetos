package Mesa2906;

public class Produto {
    private String descricao;
    private Float preço;

    public Produto(String descricao, Float preço) {
        this.descricao = descricao;
        this.preço = preço;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Float getPreço() {
        return preço;
    }

    public void setPreço(Float preço) {
        this.preço = preço;
    }
}
