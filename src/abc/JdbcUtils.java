package abc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
//连接数据库
public class JdbcUtils {

    private static final String driverUrl = "oracle.jdbc.driver.OracleDriver";

    private static final String url = "jdbc:oracle:thin:@localhost:1521:orcl";

    private static final String username = "scott";

    private static final String password = "tiger";

    public static Connection getConnection(){
        Connection connection = null;
        try {
            Class.forName(driverUrl);
            connection = DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        System.out.println("连接成功！");
        return connection;
    }
}