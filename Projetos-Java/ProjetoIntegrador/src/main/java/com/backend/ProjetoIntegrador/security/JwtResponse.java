package com.backend.ProjetoIntegrador.security;

public class JwtResponse {

    private final String jwtToken;

    public JwtResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getToken() {
        return this.jwtToken;
    }

    public JwtResponse(String jwtToken, String username, String password) {
        this.jwtToken = jwtToken;
        this.username = username;
        this.password = password;
    }

    // Adicione os métodos getUsername() e getPassword()
    private String username;
    private String password;

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
