package com.RedeHoteis.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConfiguraçaoJDBC {
    private String jdbcDriver;
    private String url;
    private String user;
    private String senha;

    public ConfiguraçaoJDBC(String jdbcDriver, String url, String user, String senha) {
        this.jdbcDriver = jdbcDriver;
        this.url = url;
        this.user = user;
        this.senha = senha;
    }

    public ConfiguraçaoJDBC() {
        this.jdbcDriver = "org.h2.Driver";
        this.url = "jdbc:h2:mem:hoteis;DB_CLOSE_DELAY=-1;INIT=RUNSCRIPT FROM 'create.sql'";
        this.user = "sa";
        this.senha = "";
    }


    public Connection conectarComBD(){
        Connection connection = null;


        try {
            connection = DriverManager.getConnection(url,user,senha);
        }catch (SQLException e){
            e.printStackTrace();
        }


        return connection;
    };
}
