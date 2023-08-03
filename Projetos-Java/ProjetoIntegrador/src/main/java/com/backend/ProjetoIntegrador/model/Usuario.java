package com.backend.ProjetoIntegrador.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Collection;

@Entity
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cpf;
    private String login;
    private String senha;
    private String tipo;

    // Outros métodos e construtores da classe

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public String getPassword() {
        return senha;
    }

    // Métodos da interface UserDetails

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Aqui você pode retornar uma coleção de objetos GrantedAuthority que representa as permissões (roles) do usuário.
        // Se o seu sistema tiver uma tabela separada para permissões e/ou papéis do usuário,
        // você pode recuperá-los aqui e retorná-los adequadamente.
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        // Implemente a lógica para verificar se a conta do usuário está expirada.
        // Por exemplo, você pode retornar true se a conta não estiver expirada e false caso contrário.
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // Implemente a lógica para verificar se a conta do usuário está bloqueada.
        // Por exemplo, você pode retornar true se a conta não estiver bloqueada e false caso contrário.
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // Implemente a lógica para verificar se as credenciais do usuário estão expiradas.
        // Por exemplo, você pode retornar true se as credenciais não estiverem expiradas e false caso contrário.
        return true;
    }

    @Override
    public boolean isEnabled() {
        // Implemente a lógica para verificar se o usuário está habilitado.
        // Por exemplo, você pode retornar true se o usuário estiver habilitado e false caso contrário.
        return true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
