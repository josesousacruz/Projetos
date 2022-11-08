import java.sql.*;

public class Main {

        public static final String sqlCreateBD = "DROP schema IF EXISTS dentista;" +
                "CREATE schema IF NOT EXISTS dentista;"; //Criar BD

        public static final String getSqlCreateTable = "CREATE TABLE IF NOT EXISTS dentista " +
                "(ID INT PRIMARY KEY, Nome VARCHAR (50) NOT NULL, matricula INT NOT NULL);";
        // CRIAR TABLE


        private static final String sqlInsert = "INSERT INTO dentista(id, nome, matricula)" +
               "VALUES (?,?,?)";


        private static final String sqlUpdate = "UPDATE dentista SET matricula = ? WHERE id = ?";

        private static final String consultar = "SELECT * FROM dentista;";


        public static void main(String[] args) throws SQLException {
        Dentista dentista = new Dentista("Silva","Marcos",1223);
        Dentista dentista2 = new Dentista("Sousa","José",1223);
        Dentista dentista3 = new Dentista("Cruz","Maria",1223);
        Dentista dentista4 = new Dentista("aaaa","aaaa",7777);


        Connection connection = null;

        try {
        connection = Conexão.getConnection();
        connection.setAutoCommit(false); // Desabilitar o autoCommit para termos o controle de quando realizar

        Statement statement = connection.createStatement();
        statement.execute(sqlCreateBD); // Executa query para criar o BD


        statement.execute(getSqlCreateTable); // Executa query para criar table


       PreparedStatement preparedStatement = connection.prepareStatement(sqlInsert);
        preparedStatement.setInt(1,6);
        preparedStatement.setString(2,dentista4.getNome());
        preparedStatement.setInt(3,dentista4.getMatricula());
        preparedStatement.executeUpdate();
                // Executa o preparedStatement inserindo os registos na tabela


        PreparedStatement preparedStatementUpdate = connection.prepareStatement(sqlUpdate);
        preparedStatementUpdate.setInt(1,5555);
        preparedStatementUpdate.setInt(2,3);
        preparedStatementUpdate.executeUpdate();





                ResultSet rs = statement.executeQuery(consultar);
                while (rs.next()){
                        System.out.println(rs.getInt(1)+
                                " "+ rs.getString(2)+
                                " "+ rs.getInt(3)
                        );
                } //Culsuta do BD



            connection.commit(); //realizarar todas as auterações desde o ultimo commit
            connection.setAutoCommit(true); // boa pratica, de voltar o autoCommit como padrão true

        }catch (Exception e){
                e.printStackTrace();
                connection.rollback();

        }finally {
                connection.close();

        }



        }

}
