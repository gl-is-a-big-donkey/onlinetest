package abc;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class InfoChange {
	public static Statement stmt = null;
    public static ResultSet res = null;
    public static Connection conn = null;
    public static String sql = "";
    public static void update(String name,String id,String sex,String mail,String pno,String pwd){
        try {
        	sql="UPDATE STUDENT SET SNAME ='"+name+"',PWD='"+pwd+"',SEX='"+sex+"',pno='"+pno+"',mail='"+mail+"' WHERE sno ='"+id+"'";
            conn=JdbcUtils.getConnection();
            stmt = conn.createStatement();
            res = stmt.executeQuery(sql);
            System.out.println("修改成功"); 
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static boolean add(String name,String id,String sex,String mail,String pno,String pwd) {
    	try {
        	sql="INSERT INTO STUDENT VALUES('"+id+"','"+name+"','"+pwd+"','"+sex+"','"+pno+"','"+mail+"')";
            conn=JdbcUtils.getConnection();
            stmt = conn.createStatement();
            res = stmt.executeQuery(sql);
            System.out.println("插入成功");
            conn.close();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    public static void delete(String id) {
    	try {
        	sql="DELETE FROM STUDENT WHERE SNO ='"+id+"'";
            conn=JdbcUtils.getConnection();
            stmt = conn.createStatement();
            res = stmt.executeQuery(sql);
            System.out.println("删除成功");
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
