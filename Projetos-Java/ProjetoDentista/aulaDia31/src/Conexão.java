import java.sql.Connection;
import java.sql.DriverManager;

public class Conexão {
    public static Connection getConnection() throws Exception{

        String url = "jdbc:h2:~/test";

        Class.forName("org.h2.Driver");

    return DriverManager.getConnection(url,"sa","");
    }

}
