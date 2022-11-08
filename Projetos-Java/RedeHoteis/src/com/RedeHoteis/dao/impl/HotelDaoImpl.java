package com.RedeHoteis.dao.impl;

import com.RedeHoteis.dao.ConfiguraçaoJDBC;
import com.RedeHoteis.dao.IDao;
import com.RedeHoteis.model.Hotel;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class HotelDaoImpl implements IDao<Hotel> {

    private static final Logger logger = Logger.getLogger(HotelDaoImpl.class);
    private ConfiguraçaoJDBC configuraçaoJDBC;

    public HotelDaoImpl(ConfiguraçaoJDBC configuraçaoJDBC) {
        this.configuraçaoJDBC = configuraçaoJDBC;
    }

    @Override
    public Hotel salvar(Hotel hotel) {

        Connection connection = configuraçaoJDBC.conectarComBD();

        String query = ("INSERT INTO hoteis (nomeFilial, rua, numero, cidade, estado, cincoEstrelas) VALUES(?,?,?,?,?,?)");

        try {
            connection.setAutoCommit(false); // Desabilitar o autoCommit para termos o controle de quando realizar

            PreparedStatement preparedStatement = connection.prepareStatement(query);

            preparedStatement.setString(1,hotel.getNomeFilial());
            preparedStatement.setString(2,hotel.getRua());
            preparedStatement.setInt(3,hotel.getNumero());
            preparedStatement.setString(4,hotel.getCidade());
            preparedStatement.setString(5,hotel.getEstado());
            preparedStatement.setBoolean(6,hotel.isE5Strelas());
            preparedStatement.executeUpdate();

            connection.commit();
            connection.setAutoCommit(true);

            logger.info("Hotel "+hotel.getNomeFilial()+" Salvo na lista");

        }catch (SQLException e){

            e.printStackTrace();
        }
        return hotel;
    }

    @Override
    public List<Hotel> buscarTodos() {
        Connection connection = configuraçaoJDBC.conectarComBD();
        Statement statement = null;
        String query = "SELECT * FROM hoteis";
        List<Hotel> hoteis = new ArrayList<>();

        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            System.out.println("Lista de Hoteis: ");

            while (resultSet.next()){
                //System.out.println(resultSet.getString(2));
                logger.info("Hotel: "+resultSet.getString(2));
                hoteis.add(new Hotel(resultSet.getString("nomeFilial"), resultSet.getString("rua"), resultSet.getInt("numero"),
                        resultSet.getString("cidade"), resultSet.getString("estado"), resultSet.getBoolean("cincoEstrelas") ));


            }

            logger.info("Busca concluida");
        }catch (SQLException e){
            logger.error("Erro na execução do BucasTodos");
            e.printStackTrace();
        }

        return hoteis;
    }
}
